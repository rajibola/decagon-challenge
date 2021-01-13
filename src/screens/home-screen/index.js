import Papa from 'papaparse';
import React, {PureComponent} from 'react';
import {FlatList, Text, View, PermissionsAndroid, Modal} from 'react-native';
import {styles} from './styles';
import RNFS from 'react-native-fs';
import {OwnersCard} from '../../shared/owners-card';
import RNFetchBlob from 'react-native-fetch-blob';
import {Loader} from '../../shared/loader';
import {hp, wp} from '../../shared/resposive-dimension';
import {AlertComponent} from '../../shared/alert-component';

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
    };
  }
  componentDidMount() {
    this.getFile();
  }

  requestExternalStoreageRead = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool App ...',
          message: 'App needs access to external storage',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use read from the storage');
        var path = RNFS.ExternalStorageDirectoryPath + '/owners/smal.csv';

        let data = [];
        var update;
        let carTypes = new Set();
        let carColors = new Set();

        RNFetchBlob.fs.readStream(path, 'utf8', 4095, 200).then((ifstream) => {
          this.setState({isLoading: true});
          ifstream.open();
          ifstream.onData(async (chunk) => {
            data += chunk;
            this.setState({count: this.state.count + 1});
          });
          ifstream.onError((err) => {
            this.setState({isLoading: false});
            console.log('oops', err);
          });
          ifstream.onEnd(() => {
            update = Papa.parse(data, {
              header: true,
              worker: true,
              complete: function (results) {
                results.data.forEach((item) => {
                  carTypes.add(item.car_model), carColors.add(item.car_color);
                });
              },
            });

            const modelsArray = Array.from(carTypes);
            const colorsArray = Array.from(carColors);
            this.setState({
              whole_data: update.data,
              car_types: modelsArray,
              all_colors: colorsArray,
              isLoading: false,
            });
            console.log(this.state.whole_data);
          });
        });
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  async filter(data) {
    if (this.state.filter_text === 'color') {
      return this.filterByColor(data);
    } else {
      return this.filterByModel(data);
    }
  }

  async filterByColor(color) {
    await this.setState({posts: []});

    const colorData = await this.state.whole_data.filter(
      (item) => item.car_color === color,
    );
    await this.setState({read_data: colorData});
    await this.runOnce();

    console.log(color);
  }

  async filterByModel(model) {
    await this.setState({posts: []});

    const modelData = await this.state.whole_data.filter(
      (item) => item.car_model === model,
    );
    await this.setState({read_data: modelData});

    await this.runOnce();
  }

  runOnce() {
    this.addRecords(0);
  }

  getFile = async () => {
    if (await this.requestExternalStoreageRead()) {
    }
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
                    modal_data: this.state.car_types,
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
                    modal_data: this.state.all_colors,
                    filter_text: 'color',
                  })
                }>
                By Color
              </Text>
            </View>
          </View>
        </View>

        {this.state.posts && (
          <FlatList
            ref={(ref) => {
              this.flatListRef = ref;
            }}
            data={this.state.posts}
            renderItem={this._renderItem}
            keyExtractor={(_, i) => _.email}
            onEndReached={this.onScrollHandler}
            onEndThreshold={0}
          />
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modal_visibility}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.modal_data}
                renderItem={this._renderModalItems}
                keyExtractor={(_, i) => i.toString()}
              />
            </View>
          </View>
        </Modal>

        {this.state.isLoading && (
          <Loader text={`Loading... \n ${this.state.count} chunk(s) of data`} />
        )}

        {!this.state.isLoading && this.state.whole_data && (
          <AlertComponent text="Check the file path" />
        )}
      </View>
    );
  }
}

export default HomeScreen;
