import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Intro, UpdateApp} from '../pages';
import {BottomNavigator} from '../components';

const TabBottom = createBottomTabNavigator();
export const MainApp = () => {
  return (
    <TabBottom.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{headerShown: false}}>
      <TabBottom.Screen name="Home" component={Home} />
      <TabBottom.Screen name="Intro" component={Intro} />
      <TabBottom.Screen name="UpdateApp" component={UpdateApp} />
    </TabBottom.Navigator>
  );
};
