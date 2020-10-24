import * as React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/home/index';
import Map from '../screens/map/index';
import Profile from '../screens/profile/index';

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

export function AppStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Map">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
