import {parse, Parser} from 'papaparse';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import RNFS from 'react-native-fs';

export class HomeScreen extends Component {
  render() {
    // console.log(results);
    return (
      <View style={styles.container}>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}

export default HomeScreen;
