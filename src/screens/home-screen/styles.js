import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../colors';
import {fonts} from '../../fonts';
import {wp, hp, getStatusBarHeight} from '../../shared/resposive-dimension';

export const styles = StyleSheet.create({
  modalText: {
    ...fonts.regularText18,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.darkGray,
    lineHeight: hp(60),
    paddingHorizontal: wp(10),
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: wp(8),
    width: wp(300),
    alignSelf: 'center',
    height: hp(400),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
    overflow: 'hidden',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(225,225,225,0.8)',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(20),
  },
  filter: {
    textAlign: 'center',
    ...fonts.boldText16,
  },
  filterText: {
    textAlign: 'center',
    paddingVertical: hp(5),
    paddingHorizontal: wp(20),
    backgroundColor: colors.ash,
    ...fonts.regularText16,
  },
  usersButton: {
    ...fonts.regularText18,
    paddingHorizontal: wp(10),
    paddingVertical: hp(7),
    marginRight: wp(20),
    textTransform: 'uppercase',
    backgroundColor: colors.dark,
    color: colors.white,
    borderRadius: wp(3),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
  },
  title: {
    ...fonts.boldText32,
    paddingHorizontal: wp(10),
    paddingVertical: hp(15),
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },
});
