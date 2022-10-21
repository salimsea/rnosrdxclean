import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors, fonts} from '../../utils';
import {ProgressBar, TouchableRipple} from 'react-native-paper';
import {ILSplash} from '../../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CodePush from 'react-native-code-push';
import {Gap} from '../../components';

const Home = ({navigation}) => {
  useEffect(() => {
    CodePush.checkForUpdate().then(update => {
      if (!update) {
        console.log('The app is up to date!');
      } else {
        console.log('An update is available! Should we download it?');
        navigation.replace('UpdateApp');
      }
    });
  }, []);

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
        <Text style={{fontFamily: fonts.primary['custom'], fontSize: 30}}>
          HOME
        </Text>
        <Gap height={15} />
        <TouchableOpacity onPress={() => navigation.navigate('UpdateApp')}>
          <Text style={{fontFamily: fonts.primary['300'], fontSize: 11}}>
            Cek Pembaruan
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
