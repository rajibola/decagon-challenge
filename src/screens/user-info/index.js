import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export class UserInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> UserInfo </Text>
      </View>
    );
  }
}

export default UserInfo;
