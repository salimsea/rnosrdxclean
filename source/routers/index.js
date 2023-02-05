import React from 'react';
import {MainApp} from './MainApp';
import {Intro, Login, UpdateApp} from '../pages';
import {configScreen} from '../common';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp" screenOptions={configScreen}>
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="UpdateApp" component={UpdateApp} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Routers;
