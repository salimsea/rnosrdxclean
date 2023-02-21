import React from 'react';
import {View} from 'react-native';

const Gap = ({height, width, color, marginVertical = 0}) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: color,
        marginVertical: marginVertical,
      }}
    />
  );
};

export default Gap;
