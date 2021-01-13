import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import {styles} from './styles';

export const AlertComponent = ({text}) => {
  return (
    // <Modal animationType="slide" transparent={true} visible={true}>
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
    // </Modal>
  );
};
