import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {colors} from '../../colors';
import {styles} from './styles';

export const Loader = ({text}) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={colors.dark} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
