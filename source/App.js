import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {OneSignalInit} from './helpers';
import OneSignal from 'react-native-onesignal';

OneSignalInit();
const App = () => {
  useEffect(() => {
    initApp();
  }, []);

  const initApp = async () => {
    const tokenFcm = await OneSignal.getDeviceState();
    const notificationObj = {
      contents: {en: 'Welcome In RNOSRDXCLEAN :)'},
      include_player_ids: [tokenFcm.userId],
    };
    const json = JSON.stringify(notificationObj);
    OneSignal.postNotification(
      json,
      success => {
        console.log(`Success: ${JSON.stringify(success)}`);
      },
      failure => {
        console.log(`Failure: ${JSON.stringify(failure)}`);
      },
    );
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
