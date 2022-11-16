import React, {useEffect} from 'react';
import OneSignal from 'react-native-onesignal';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {IgnoreLog, navigationRef, OneSignalInit, store} from './config';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';
import CodePush from 'react-native-code-push';

OneSignalInit();
IgnoreLog();
let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  installMode: CodePush.InstallMode.ON_NEXT_RESUME,
};
const App = () => {
  useEffect(() => {
    async function fetchData() {
      const deviceState = await OneSignal.getDeviceState();
      console.log('token onesignal : ', deviceState.userId);
      SplashScreen.hide();
    }
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Routers />
      </NavigationContainer>
    </Provider>
  );
};

export default CodePush(CodePushOptions)(App);
