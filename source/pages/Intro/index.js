import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fontFamilys, fontSizes} from '../../common';

const Intro = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        <Text
          style={{
            fontFamily: fontFamilys.primary[600],
            fontSize: fontSizes.heading6,
          }}>
          INTRO
        </Text>
      </View>
    </>
  );
};

export default Intro;

const styles = StyleSheet.create({});
