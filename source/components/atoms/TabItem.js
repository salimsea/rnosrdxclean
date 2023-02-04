import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fontFamilys} from '../../common';

const TabItem = ({title, active, onPress, onLongPress}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        onLongPress={onLongPress}>
        <Text
          style={[
            styles.text,
            {color: active ? colors.black : colors.primary[100]},
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    width: '20%',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    fontFamily: fontFamilys.primary[800],
    marginTop: 2,
  },
});
