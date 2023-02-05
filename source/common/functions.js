import {Platform} from 'react-native';

export const FUNCConvertDateDmyToYmd = date => {
  var slicedd = date.slice(0, 2);
  var slicemm = date.slice(3, 5);
  var sliceyy = date.slice(6, 10);
  return sliceyy + '-' + slicemm + '-' + slicedd;
};

export const FUNCGenerateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: shadowColorIos,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    return {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
