import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {fonts} from '../../fonts';
import {wp} from '../resposive-dimension';

export const styles = StyleSheet.create({
  text: {
    ...fonts.boldText18,
    color: colors.dark,
    textAlign: 'center',
    width: wp(230),
    alignSelf: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
