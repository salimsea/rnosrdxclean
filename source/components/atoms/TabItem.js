import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {colors, fontFamilys} from '../../common';

const TabItem = ({title, active, onPress, onLongPress}) => {
  return (
    <>
      <TouchableRipple
        style={styles.container}
        onPress={onPress}
        onLongPress={onLongPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableRipple>
    </>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    width: '20%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
  text: active => ({
    fontSize: 11,
    fontFamily: fontFamilys.primary[800],
    marginTop: 2,
    color: active ? colors.black : colors.primary[100],
  }),
});
