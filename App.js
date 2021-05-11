/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  LogBox,
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
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer'

enableScreens();
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const stylesHome = StyleSheet.create({
  
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

const HomeScreen = ({navigation}) => {
  navigation.setOptions({
    headerRight: ()=>(
      <Button title="Save" onPress={()=>{navigation.replace('Home');}}>

      </Button>
    )
  })
  return(
  <View style={
    {flex:1, alignItems: 'center', justifyContent:'center'}
  }>
    <Text style={stylesHome.titleText}>Home Screens{'\n'}{'\n'}</Text>
    {/* <IonIcon name="ios-home" size={16} color="blue"/> */}
    <Button title="Details Screen" onPress={()=>navigation.navigate('Details')}></Button>
    <Text>{'\n'}</Text>
    <Button title="Settings Screen" onPress={()=>navigation.navigate('Settings')}></Button>
  </View>
)};

const SettingsScreen = ({navigation}) => {
  const isFocused = useIsFocused()
  return (<View style={
    {flex:1, alignItems: 'center', justifyContent:'center'}
  }>
    <Text style={{color: isFocused ? 'green' : 'black'}}>Settings Screens</Text>
    <Button title="Home Screen" onPress={()=>navigation.navigate('Home')}></Button>
  </View>)
};

const FeedScreen = props => (
  <View style={
    {flex:1, alignItems: 'center', justifyContent:'center'}
    }>
    <Text>Feed Screen</Text>
  </View>
)

const DetailsScreen = ({navigation}) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Details Screen</Text>
    <Button title="More Details" onPress={()=>navigation.navigate('MoreDetails')}></Button>
  </View>
);

const MoreDetails = props => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>More Details Here</Text>
    
  </View>
);

const HomeStackNavigator = ({ navigation, route }) => {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    });
  }
  return (
    <HomeStack.Navigator screenOptions={{
        gestureEnabled: true, 
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="MoreDetails" component={MoreDetails} />
    </HomeStack.Navigator>
  );
};

const HomeTabNavigator = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = "ios-home";
          } else if (route.name == "Feed") {
            iconName = "logo-rss";
          } else if (route.name == "Settings") {
            iconName = "ios-settings";
          }
          return <IonIcon name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

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

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  }
};

function getHeaderTitle(route){
  const routeName = route.state? route.state.routes[route.state.index].name : 'Home'
  switch(routeName){
    case "Home": return "Home";
    case "Feed": return "Feed";
    case "Settings": return "Settings";
  }
}

function shouldHeaderBeShown(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : "Home";
  switch (routeName) {
    case "Home":
      return false;
  }
}

LogBox.ignoreAllLogs();

function HomePage({ navigation }){
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        gestureEnabled: true, 
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, 
        transitionSpec: {
          open: config,
          close: closeConfig
        }
      }}
      headerMode="float"
      animation="fade"
      >
        <Stack.Screen 
        options={({route})=>({
          title: getHeaderTitle(route),
          headerShown: shouldHeaderBeShown(route)
        })} 
        name="Home" component={HomeTabNavigator}>         
        </Stack.Screen>
        <Stack.Screen name="Settings" component={SettingsScreen}></Stack.Screen>
      </Stack.Navigator>
  );
}

const ContactUs = props => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={stylesHome.titleText}>Contact Us Page</Text>
    
  </View>
);

const Drawer = createDrawerNavigator();


export default function App(){
  return <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />

      </Drawer.Navigator>
  </NavigationContainer>
}

