import React, {useEffect} from 'react';
import {navigationRef, OneSignalInit} from './helpers';
import OneSignal from 'react-native-onesignal';
import {Provider as ProvideRedux} from 'react-redux';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';
import store from './redux/store';
import SplashScreen from 'react-native-splash-screen';

OneSignalInit();
const App = () => {
  useEffect(() => {
    initApp();
  }, []);

  const initApp = async () => {
    const tokenFcm = await OneSignal.getDeviceState();
    const notificationObj = {
      contents: {
        en: 'Thanks for cloning my projetc. Welcome In RNOSRDXCLEAN :)',
      },
      headings: {en: 'Hei, brother'},
      include_player_ids: [tokenFcm.userId],
      existing_android_channel_id: 'b7639c34-807a-4a96-8b4b-9026e4401283',
    };
    console.log('tokenFcm.userId', tokenFcm.userId);
    const json = JSON.stringify(notificationObj);
    OneSignal.postNotification(
      json,
      success => {
        SplashScreen.hide();
        console.log(`Success: ${JSON.stringify(success)}`);
      },
      failure => {
        console.log(`Failure: ${JSON.stringify(failure)}`);
      },
    );
  };

  return (
    <Provider>
      <ProvideRedux store={store}>
        <NavigationContainer ref={navigationRef}>
          <Routers />
        </NavigationContainer>
      </ProvideRedux>
    </Provider>
  );
};

export default App;
