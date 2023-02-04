import React from 'react';
import {MainApp} from './MainApp';
import {Intro, UpdateApp} from '../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="UpdateApp" component={UpdateApp} />
    </Stack.Navigator>
  );
};

export default Routers;
