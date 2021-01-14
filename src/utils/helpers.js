import Papa from 'papaparse';
import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';

export const handleDate = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};

export const getTime = (date) => {
  const time = new Date(date);
  return `${time.getHours()} : ${time.getMinutes()}`;
};

export const requestExternalStoreageRead = async (
  onDataCompleted,
  updateChunkCount,
  toggleLoader,
) => {
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
      var path = RNFS.ExternalStorageDirectoryPath + '/owners/hw_200.csv';

      let data = [];
      var update;
      let carTypes = new Set();
      let carColors = new Set();

      RNFetchBlob.fs
        .readStream(path, 'utf8', 4095, 200)
        .then(async (ifstream) => {
          toggleLoader();
          ifstream.open();
          ifstream.onData(async (chunk) => {
            data += chunk;
            updateChunkCount();
          });
          ifstream.onError((err) => {
            toggleLoader(true);
            console.log('oops', err);
          });
          ifstream.onEnd(async () => {
            update = Papa.parse(data, {
              header: true,
              worker: true,
              complete: function (results) {
                results.data.forEach((item) => {
                  carTypes.add(item.car_model), carColors.add(item.car_color);
                });
              },
            });

            const modelsArray = await Array.from(carTypes);
            const colorsArray = await Array.from(carColors);
            onDataCompleted({
              whole_data: update.data,
              car_types: modelsArray,
              all_colors: colorsArray,
              isLoading: false,
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
