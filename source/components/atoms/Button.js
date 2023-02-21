import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  fontFamilys,
  fonts,
  fontSizes,
  FUNCGenerateBoxShadowStyle,
} from '../../common';
import {TouchableRipple} from 'react-native-paper';

const Button = ({
  type,
  title,
  onPress,
  width = '100%',
  icon = false,
  bgCustom,
  textCustom,
  disabled = false,
}) => {
  if (type === 'custom') {
    return (
      <TouchableRipple
        onPress={onPress}
        borderless={true}
        rippleColor={'rgb(152 152 152 / 24%)'}
        disabled={disabled}
        style={[styles.containerCustom(width, bgCustom)]}>
        <View>
          {icon}
          <Text style={styles.textCustom(textCustom, icon)}>{title}</Text>
        </View>
      </TouchableRipple>
    );
  } else {
    return (
      <TouchableRipple
        onPress={onPress}
        borderless={true}
        rippleColor={'rgb(152 152 152 / 24%)'}
        disabled={disabled}
        style={[
          styles.container(type, width, disabled),
          FUNCGenerateBoxShadowStyle(0, 4, '#00101F', 0.2, 3, 2, '#00101F'),
        ]}>
        <View>
          {icon}
          <Text style={styles.text(type, icon)}>{title}</Text>
        </View>
      </TouchableRipple>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  container: (type, width, disabled) => ({
    width,
    backgroundColor:
      type === 'secondary'
        ? colors.white
        : !disabled
        ? colors.primary[500]
        : colors.greyscale[200],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor:
      type === 'secondary'
        ? colors.primary[500]
        : !disabled
        ? colors.primary[500]
        : colors.greyscale[200],
  }),
  text: (type, icon) => ({
    fontSize: fontSizes.cta,
    fontFamily: fontFamilys.primary[600],
    color: type === 'secondary' ? colors.primary[500] : colors.white,
    textAlign: 'center',
    paddingLeft: !icon ? 0 : 10,
  }),
  containerCustom: (width, bgCustom) => ({
    width,
    backgroundColor: bgCustom,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
  }),
  textCustom: (textCustom, icon) => ({
    fontSize: fontSizes.cta,
    fontFamily: fonts.primary[600],
    color: textCustom,
    textAlign: 'center',
    paddingLeft: !icon ? 0 : 10,
  }),
});
