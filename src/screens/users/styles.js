import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../colors';
import {fonts} from '../../fonts';
import {getStatusBarHeight, hp, wp} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  date: {
    ...fonts.regularText14,
    opacity: 0.6,
  },
  name: {
    ...fonts.regularText18,
    marginBottom: hp(5),
  },
  gender: {
    position: 'absolute',
    right: wp(3),
    bottom: wp(3),
    width: wp(10),
    height: wp(10),
    backgroundColor: colors.white,
    borderRadius: wp(10),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 3,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(10),
    marginVertical: hp(5),
    backgroundColor: colors.white,
    paddingHorizontal: wp(10),
    marginHorizontal: wp(5),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: wp(5),
  },
  avatarContainer: {
    borderWidth: 0.5,
    width: wp(55),
    height: wp(55),
    borderRadius: wp(55),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(15),
    borderColor: colors.gray,
  },
  avatar: {
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },
});
