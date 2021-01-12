import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import {hp} from '../resposive-dimension';

const HeaderBar = ({title, onRightPress, onLeftPress}) => {
  return (
    <View style={styles.container}>
      {onLeftPress && (
        <TouchableOpacity style={styles.sideIcon} onPress={onLeftPress}>
          <Icon name="chevron-thin-left" size={hp(16)} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.sideIcon} onPress={onRightPress}>
        {onRightPress && <Text style={styles.backText}>Home</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
