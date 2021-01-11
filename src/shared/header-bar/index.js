import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {hp} from '../resposive-dimension';

const HeaderBar = ({title, leftIcon, rightIcon, onRightPress, onLeftPress}) => {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity style={styles.sideIcon} onPress={onLeftPress}>
          <Icon name="chevron-thin-left" size={hp(16)} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.sideIcon} onPress={onRightPress}>
        {rightIcon && <Text style={styles.backText}>Home</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
