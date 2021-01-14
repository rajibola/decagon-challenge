# decagon-challenge

[![rajibola](https://circleci.com/gh/rajibola/decagon-challenge.svg?style=svg&circle-token=d68ea90db9b067d231c2f6d7ee8dc6cadd9be1f6)](https://github.com/rajibola)

## Getting Started

1. Fork or Clone the repo, then set it up:

```
$ cd clane-challenge
$ yarn install
```

### Run on Android

```
$ npx react-native run-android
```

### Run on iOS

```
$ cd ios && pod install
$ cd .. && npx react-native run-ios
```

## Technologies Used:
  * react-native-fs: used to get the external storage path to the owners/car_ownsers_data.csv.
  * react-native-fetch-blob: used to read the file from the path provided in streams.
  * papaparse: is used to convert the result from react-native-fetch-blob to an array.
  * react-native-vector-icons: is used to render the UI icons.

