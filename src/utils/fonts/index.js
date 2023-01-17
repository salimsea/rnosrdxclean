import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const fonts = {
  primary: {
    200: 'Poppins-Thin',
    300: 'Poppins-Light',
    400: 'Poppins-Regular',
    600: 'Poppins-SemiBold',
    700: 'Poppins-Bold',
    800: 'Poppins-ExtraBold',
    900: 'Poppins-Black',
    normal: 'Poppins-Medium',
  },
  secondary: {
    200: 'OpenSans-ExtraLight',
    300: 'OpenSans-Light',
    400: 'OpenSans-Regular',
    600: 'OpenSans-SemiBold',
    700: 'OpenSans-Bold',
    800: 'OpenSans-ExtraBold',
    900: 'OpenSans-Black',
    normal: 'OpenSans-Regular',
  },
};

export const fontSize = {
  mini: RFValue(12, hp('100%')),
  small: RFValue(14, hp('100%')),
  medium: RFValue(17, hp('100%')),
  large: RFValue(20, hp('100%')),
  xlarge: RFValue(24, hp('100%')),
};
