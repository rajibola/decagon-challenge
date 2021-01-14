import React, {PureComponent} from 'react';
import {FlatList, Text, View, Modal} from 'react-native';
import {styles} from './styles';
import {OwnersCard} from '../../shared/owners-card';
import {Loader} from '../../shared/loader';
import {AlertComponent} from '../../shared/alert-component';
import {requestExternalStoreageRead} from '../../utils/helpers';

export class HomeScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      whole_data: [],
      page: 0,
      posts: [],
      car_types: [],
      all_colors: [],
      modal_data: [],
      modal_visibility: false,
      read_data: [],
      filter_text: '',
      count: 0,
      alert: false,
    };
  }
  componentDidMount() {
    this.getFile();
  }

  onDataCompleted = async (values) => {
    await this.setState(values);
    await this.setState({read_data: [...this.state.whole_data]});
    this.addRecords(0);
  };
  filter(data) {
    this.state.filter_text === 'color'
      ? this.filterByColor(data)
      : this.filterByModel(data);
  }

  async filterByColor(color) {
    await this.setState({posts: []});
    const colorData = await this.state.whole_data.filter(
      (item) => item.car_color === color,
    );
    await this.setState({read_data: colorData});
    await this.addRecords(0);
  }

  async filterByModel(model) {
    await this.setState({posts: []});
    const modelData = await this.state.whole_data.filter(
      (item) => item.car_model === model,
    );
    await this.setState({read_data: modelData});
    this.addRecords(0);
  }

  getFile = () => {
    requestExternalStoreageRead(
      this.onDataCompleted,
      this.updateChunkCount,
      this.toggleLoader,
    );
  };

  updateChunkCount = () => {
    this.setState({count: this.state.count + 1});
  };

  toggleLoader = (isError: boolean) => {
    this.setState({isLoading: !this.state.isLoading});
    isError && this.setState({alert: true});
  };

  addRecords = (page) => {
    const newRecords = [];
    for (
      var i = page * 12, il = i + 12;
      i < il && i < this.state.read_data.length;
      i++
    ) {
      newRecords.push(this.state.read_data[i]);
    }
    this.setState({
      posts: [...this.state.posts, ...newRecords],
    });
  };

  onScrollHandler = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.addRecords(this.state.page);
      },
    );
  };

  _renderItem = ({item}) => <OwnersCard data={item} />;

  _renderModalItems = ({item}) => {
    return (
      <Text
        style={styles.modalText}
        onPress={() => {
          this.filter(item), this.setState({modal_visibility: false});
        }}>
        {item}
      </Text>
    );
  };

  render() {
    const {
      posts,
      modal_visibility,
      modal_data,
      isLoading,
      alert,
      count,
      car_types,
      all_colors,
    } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}> Car{'\n'} Owners </Text>
            <Text
              style={styles.usersButton}
              onPress={() => this.props.navigation.navigate('Users')}>
              Users
            </Text>
          </View>
          <View>
            <View style={styles.filterContainer}>
              <Text style={styles.filter}>Filter Car</Text>
              <Text
                style={styles.filterText}
                onPress={() =>
                  this.setState({
                    modal_visibility: true,
                    modal_data: car_types,
                    filter_text: 'type',
                  })
                }>
                By Type
              </Text>
              <Text
                style={styles.filterText}
                onPress={() =>
                  this.setState({
                    modal_visibility: true,
                    modal_data: all_colors,
                    filter_text: 'color',
                  })
                }>
                By Color
              </Text>
            </View>
          </View>
        </View>

        {posts && (
          <FlatList
            ref={(ref) => {
              this.flatListRef = ref;
            }}
            data={posts}
            renderItem={this._renderItem}
            keyExtractor={(_, i) => _.email}
            onEndReached={this.onScrollHandler}
            onEndThreshold={0}
          />
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modal_visibility}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={modal_data}
                renderItem={this._renderModalItems}
                keyExtractor={(_, i) => i.toString()}
              />
            </View>
          </View>
        </Modal>

        {isLoading && (
          <Loader text={`Loading... \n ${count} chunk(s) of data`} />
        )}

        {alert && (
          <AlertComponent text={`File Missing\n Please check the file path`} />
        )}
      </View>
    );
  }
}

export default HomeScreen;
