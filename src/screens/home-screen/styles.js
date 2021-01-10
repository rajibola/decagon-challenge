import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {fonts} from '../../fonts';
import {wp, hp} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  title: {
    ...fonts.boldText32,
    paddingHorizontal: wp(10),
    paddingVertical: hp(15),
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
