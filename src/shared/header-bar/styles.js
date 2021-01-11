import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {fonts} from '../../fonts';
import {hp, wp} from '../resposive-dimension';

export const styles = StyleSheet.create({
  title: {
    ...fonts.boldText18,
  },
  backText: {
    ...fonts.regularText18,
    marginLeft: wp(5),
  },
  sideIcon: {
    width: wp(55),
    height: wp(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    height: hp(55),
    backgroundColor: colors.darkGray,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(15),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
