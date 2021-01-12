import Papa from 'papaparse';
import React, {Component} from 'react';
import {FlatList, Text, View, PermissionsAndroid} from 'react-native';
import {styles} from './styles';
import RNFS from 'react-native-fs';
import {OwnersCard} from '../../shared/owners-card';
import RNFetchBlob from 'react-native-fetch-blob';

export class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      whole_data: null,
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
        var path =
          RNFS.ExternalStorageDirectoryPath + '/owners/snakes_count_1000.csv';
        // console.log('PATH', path);

        let data = [];
        let count = 0;

        RNFetchBlob.fs
          .readStream(
            // file path
            path,
            'utf8',
            4095,
            200,
          )
          .then((ifstream) => {
            ifstream.open();
            ifstream.onData((chunk) => {
              // when encoding is `ascii`, chunk will be an array contains numbers
              // otherwise it will be a string
              // console.log('CHUNK', RNFetchBlob.base64.decode(chunk));
              // if (count % 500 === 0) {
              //   this.setState({whole_data: data});
              // }
              data += chunk;
              // data.concat(...chunk);
              count++;
              // console.log(count);
              this.setState({
                whole_data: Papa.parse(data, {
                  header: true,
                  complete: function (results) {
                    console.log('Finished:', results.data);
                  },
                }),
              });
            });
            ifstream.onError((err) => {
              console.log('oops', err);
            });
            ifstream.onEnd(async () => {
              await this.setState({
                whole_data: Papa.parse(data, {
                  header: true,
                  complete: function (results) {
                    console.log('Finished:');
                  },
                }),
              });
              await console.log('WHOLE_DATA ', this.state.whole_data.data);
              // console.log('THE END', data);

              // Papa.parse(data, {
              //   // download: true,

              //   // worker: true,
              //   // comments: '',
              //   header: true,
              //   // dynamicTyping: true,
              //   // step: function (results) {
              //   //   console.log('Row:', results.data);
              //   // },
              //   complete: function (results) {
              //     console.log('WHOLE DATA', this.state.whole_data);
              //   },
              // });
            });
          });

        // RNFS.readFile(path)
        //   .then((res) => {
        //     console.log('RESPONSE', res);
        //   })

        //   .catch((err) => {
        //     console.log(err.message, err.code);
        //   });

        // Papa.parse(path, {
        //   // download: true,
        //   worker: true,
        //   step: function (results) {
        //     console.log('Row:', results.data);
        //   },
        // });
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  getFile = async () => {
    if (await this.requestExternalStoreageRead()) {
      var path =
        RNFS.ExternalStorageDirectoryPath + '/owners/car_ownsers_data.csv';
      console.log('PATH', path);

      // Papa.parse(path, {
      //   worker: true,
      //   step: function (results) {
      //     console.log('Row:', results.data);
      //   },
      // });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Car{'\n'} Owners </Text>

        <FlatList
          data={Data}
          renderItem={({item}) => <OwnersCard data={item} />}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>
    );
  }
}

export default HomeScreen;

const Data = [
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
  {
    bio:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    car_color: 'Maroon',
    car_model: 'Lincoln',
    car_model_year: '1996',
    country: 'Thailand',
    email: 'shainning0@so-net.ne.jp',
    first_name: 'Scot',
    gender: 'Male',
    id: '1',
    job_title: 'Staff Accountant III',
    last_name: 'Hainning',
  },
];
