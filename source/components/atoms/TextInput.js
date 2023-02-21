import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TextInput as TextInputPaper} from 'react-native-paper';
import {colors, fontFamilys, fontSizes} from '../../common';

const TextInput = ({
  value,
  onChangeText,
  placeholder,
  isSecure = false,
  label,
  labelError,
  ...props
}) => {
  return (
    <>
      <TextInputPaper
        label={label}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        mode={'outlined'}
        outlineColor={
          !labelError ? colors.greyscale[100] : colors.secondary.danger['500']
        }
        selectionColor={colors.secondary.info[500]}
        multiline={props.isTextArea ? true : false}
        style={styles.textinput(props)}
        activeOutlineColor={
          !labelError ? colors.primary[500] : colors.secondary.danger['500']
        }
        error={labelError || false}
        theme={{
          roundness: 10,
          colors: {
            error: colors.secondary.danger['500'],
            text: colors.greyscale[500],
            placeholder: colors.greyscale[300],
          },
        }}
        {...props}
      />
      {labelError && <Text style={styles.txtError}>{labelError}</Text>}
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  txtError: {
    fontSize: fontSizes.small,
    fontFamily: fontFamilys.primary['400'],
    color: colors.secondary.danger[500],
    marginTop: 4,
  },
  textinput: props => ({
    backgroundColor: colors.white,
    borderRadius: 12,
    minHeight: props.isTextArea ? 100 : 0,
    textAlignVertical: props.isTextArea ? 'top' : 'center',
    paddingLeft: 5,
  }),
});
