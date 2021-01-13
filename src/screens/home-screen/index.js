import Papa from 'papaparse';
import React, {PureComponent} from 'react';
import {FlatList, Text, View, PermissionsAndroid, Modal} from 'react-native';
import {styles} from './styles';
import RNFS from 'react-native-fs';
import {OwnersCard} from '../../shared/owners-card';
import RNFetchBlob from 'react-native-fetch-blob';
import {Loader} from '../../shared/loader';
import {hp, wp} from '../../shared/resposive-dimension';

export class HomeScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      whole_data: null,
      page: 0,
      posts: [],

      car_types: [],
      all_colors: [],

      modal_data: [],
      modal_visibility: false,
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
        var path = RNFS.ExternalStorageDirectoryPath + '/owners/small.csv';

        let data = [];
        var update;
        let count = 0;
        let carTypes = new Set();
        let carColors = new Set();

        RNFetchBlob.fs.readStream(path, 'utf8', 4095, 200).then((ifstream) => {
          ifstream.open();
          ifstream.onData(async (chunk) => {
            data += chunk;
            count++;

            await this.setState({
              whole_data: update.data,
            });

            if (count === 1) {
              this.runOnce();
            }
          });
          ifstream.onError((err) => {
            console.log('oops', err);
          });
          ifstream.onEnd(async () => {
            update = await Papa.parse(data, {
              header: true,
              worker: true,
              complete: function (results) {
                results.data.forEach((item) => {
                  carTypes.add(item.car_model), carColors.add(item.car_color);
                });
                console.log('RESULT', carColors);
              },
            });

            const modelsArray = await Array.from(carTypes);
            const colorsArray = await Array.from(carColors);
            await this.setState({
              whole_data: update.data,
              car_types: modelsArray,
              all_colors: colorsArray,
            });
          });
        });
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  filterByColor = (color) => {
    const colorData = this.state.whole_data.filter(
      (item) => item.car_color === color,
    );
    this.setState({car_color_data: colorData});
  };

  filterByModel = (model) => {
    const modelData = this.state.whole_data.filter(
      (item) => (item.car_model = model),
    );
    this.setState({car_model_data: modelData});
    console.log(modelData);
  };

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
      i < il && i < this.state.whole_data.length;
      i++
    ) {
      newRecords.push(this.state.whole_data[i]);
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
                  })
                }>
                Type
              </Text>
              <Text
                style={styles.filterText}
                onPress={() =>
                  this.setState({
                    modal_visibility: true,
                    modal_data: this.state.all_colors,
                  })
                }>
                color
              </Text>
              <Text style={styles.filterText}>Type</Text>
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
            keyExtractor={(_, i) => i.toString()}
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
                data={this.state.modal_data}
                renderItem={({item}) => {
                  return <Text style={styles.modalText}>{item}</Text>;
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default HomeScreen;
