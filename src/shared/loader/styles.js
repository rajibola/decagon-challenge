import {StyleSheet} from 'react-native';
import {fonts} from '../../fonts';

export const styles = StyleSheet.create({
  text: {
    ...fonts.boldText18,
    textAlign: 'center',
  },
  loader: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});
