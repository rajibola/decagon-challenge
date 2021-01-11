import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {wp} from '../../shared/resposive-dimension';
import {styles} from './styles';

export class UserInfo extends Component {
  render() {
    const {details} = this.props.route.params;
    console.log(details.colors);
    return (
      <View style={styles.container}>
        <Text> UserInfo {details.colors} </Text>
        {details.colors.map((color) => (
          <View
            style={{
              width: wp(220),
              height: wp(20),
              backgroundColor: `${color.toLowerCase()}`,
            }}></View>
        ))}
      </View>
    );
  }
}

export default UserInfo;
