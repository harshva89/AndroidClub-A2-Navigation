import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer, useIsFocused } from '@react-navigation/native'
import {CardStyleInterpolators, createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import Easing from 'react-native/Libraries/Animated/src/Easing';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {enableScreens} from 'react-native-screens'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import Home from './app/Screens/Home'
import Settings from './app/Screens/Settings'


enableScreens();
const Stack = createNativeStackNavigator()    //Gesture in IOS only, for android use createStackNavigator

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
};

export default function NativeStack(){
  return <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        //   stackAnimation: "flip",
        //   stackPresentation: "modal"
        // gestureEnabled: true,
        // gestureDirection: "horizontal",
        CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
        
      }}>
          <Stack.Screen name="Home" component={Home}
            options={{headerCenter:()=><Text>HomePage</Text>}}
          ></Stack.Screen>
          <Stack.Screen 
          options={{headerLargeTitle: true}}
           name="Settings" component={Settings}></Stack.Screen>
      </Stack.Navigator>
  </NavigationContainer>
}