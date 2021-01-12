import {StyleSheet} from 'react-native';
import {colors} from '../../colors';
import {fonts} from '../../fonts';
import {hp, wp} from '../resposive-dimension';

export const styles = StyleSheet.create({
  icon: {
    width: wp(20),
  },
  bioDetail: {
    ...fonts.regularText14,
  },
  bio: {},
  containerRow: {
    // flexDirection: 'row',
    paddingHorizontal: wp(10),
  },
  name: {
    ...fonts.boldText18,
    backgroundColor: colors.ash,
    minHeight: hp(30),
    paddingLeft: hp(10),
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.ash,
    alignItems: 'center',
  },

  detail: {
    width: wp(130),
    ...fonts.regularText14,
  },
  listTitle: {
    width: wp(20),
    height: wp(20),
    ...fonts.boldText16,
    backgroundColor: colors.gray,
    marginRight: wp(5),
    marginVertical: wp(2),
  },
  card: {
    alignSelf: 'center',
    width: wp(350),
    borderRadius: wp(5),
    paddingBottom: hp(15),
    backgroundColor: colors.white,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: hp(5),
  },
});
