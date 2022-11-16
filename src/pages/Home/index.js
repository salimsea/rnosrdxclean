import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors, fonts, fontSize} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CodePush from 'react-native-code-push';
import {Gap} from '../../components';

const Home = ({navigation}) => {
  useEffect(() => {
    const checkUpdate = () => {
      CodePush.checkForUpdate().then(update => {
        if (!update) {
          console.log('The app is up to date!');
        } else {
          console.log('An update is available! Should we download it?');
          // navigation.replace('UpdateApp');
        }
      });
    };
    checkUpdate();
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
        <Text
          style={{fontFamily: fonts.primary[600], fontSize: fontSize.xlarge}}>
          HOME
        </Text>
        <Text
          style={{fontFamily: fonts.primary[300], fontSize: fontSize.xlarge}}>
          BOILER TEMPLATE FOR REACT NATIVE
        </Text>
        <Text
          style={{fontFamily: fonts.primary[300], fontSize: fontSize.small}}>
          Run This{' '}
          <Text
            style={{fontFamily: fonts.primary[600], fontSize: fontSize.small}}>
            "npx react-native-rename "yourApp" -b com.your.app"
          </Text>
        </Text>
        <Gap height={15} />
        <TouchableOpacity
          onPress={() => navigation.navigate('UpdateApp')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: fonts.primary['300'],
              fontSize: fontSize.small,
              paddingRight: 10,
            }}>
            Check Update
          </Text>
          <Icon name="update" size={20} color={colors.dark} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
