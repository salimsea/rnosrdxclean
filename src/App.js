import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {fonts} from './utils';
import OneSignal from 'react-native-onesignal';
import SplashScreen from 'react-native-splash-screen';
import {OneSignalInit} from './config';

OneSignalInit();

const App = () => {
  useEffect(() => {
    async function fetchData() {
      const deviceState = await OneSignal.getDeviceState();
      console.log(deviceState.userId);
      SplashScreen.hide();
    }
    fetchData();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontFamily: fonts.primary['custom'], fontSize: 30}}>
        BOILER TEMPLATE
      </Text>
      <Text style={{fontFamily: fonts.primary['custom'], fontSize: 25}}>
        - reactnative -
      </Text>
    </View>
  );
};

export default App;
