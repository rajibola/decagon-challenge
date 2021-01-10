import {colors} from './colors';
import {hp, wp} from './shared/resposive-dimension/index';

export const fonts = {
  regularText18: {
    fontSize: hp(18),
    lineHeight: hp(27),
    color: colors.dark,
  },
  regularText16: {
    fontSize: hp(16),
    lineHeight: hp(24),
    color: colors.dark,
  },
  regularText14: {
    fontSize: hp(14),
    lineHeight: hp(18),
    color: colors.dark,
  },

  boldText32: {
    fontSize: hp(32),
    lineHeight: hp(30),
    color: colors.dark,
    fontWeight: 'bold',
  },

  boldText18: {
    fontSize: hp(18),
    lineHeight: hp(27),
    color: colors.dark,
    fontWeight: 'bold',
  },

  boldText16: {
    fontSize: hp(16),
    lineHeight: hp(24),
    color: colors.dark,
    fontWeight: 'bold',
  },

  boldText14: {
    fontSize: hp(14),
    lineHeight: hp(21),
    color: colors.dark,
    fontWeight: 'bold',
  },
};
