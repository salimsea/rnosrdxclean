import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Intro, User} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const TabBottom = createBottomTabNavigator();

const itemConfigOpenClose = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const configBottomBar = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: itemConfigOpenClose,
    close: itemConfigOpenClose,
  },
  headerShown: false,
};

const MainApp = () => {
  return (
    <TabBottom.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{headerShown: false}}>
      <TabBottom.Screen name="Home" component={Home} />
      <TabBottom.Screen name="Intro" component={Intro} />
    </TabBottom.Navigator>
  );
};

const Routers = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp" screenOptions={configBottomBar}>
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default Routers;
