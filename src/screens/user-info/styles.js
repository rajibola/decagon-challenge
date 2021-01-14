import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {fonts} from '../../fonts';
import {
  deviceWidth,
  getStatusBarHeight,
  hp,
  wp,
} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  timeLabel: {
    position: 'absolute',
    right: 0,
    backgroundColor: colors.dark,
    top: hp(10),
    paddingLeft: wp(12),
    paddingRight: wp(10),
    paddingVertical: wp(8),
    borderBottomLeftRadius: wp(30),
    borderTopLeftRadius: wp(30),
    ...fonts.regularText14,
    color: colors.white,
    textTransform: 'uppercase',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  time: {
    ...fonts.boldText32,
    marginVertical: hp(10),
  },
  gender: {
    ...fonts.regularText16,
    marginLeft: wp(40),
  },
  emptyText: {
    ...fonts.regularText16,
    opacity: 0.5,
  },
  country: {
    ...fonts.regularText16,
    color: colors.white,
    backgroundColor: colors.dark,
    paddingHorizontal: wp(5),
    marginRight: wp(5),
    marginTop: hp(5),
    borderRadius: wp(2),
  },

  color: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(30),
    position: 'absolute',
    marginTop: wp(15),
  },
  myColors: {
    marginLeft: wp(40),
    marginTop: hp(30),
    ...fonts.boldText14,
    borderBottomWidth: wp(1),
    borderBottomColor: `rgba(0,0,0,0.2)`,
    textTransform: 'uppercase',
    opacity: 0.7,
    letterSpacing: wp(0.5),
  },
  childContainer: {
    marginLeft: wp(40),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  about: {
    marginLeft: wp(40),
    paddingTop: hp(10),
    ...fonts.regularText16,
    opacity: 0.7,
    paddingRight: wp(40),
  },
  name: {
    ...fonts.boldText32,
    marginLeft: wp(40),
  },
  avatar: {
    width: wp(70),
    height: wp(70),
    borderRadius: wp(70),
    resizeMode: 'contain',
    marginBottom: hp(25),
    marginTop: hp(35),
    marginHorizontal: wp(40),
  },
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    marginTop: getStatusBarHeight(),
  },
});
