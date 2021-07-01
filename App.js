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
  Pressable,
  Linking
} from 'react-native';

import { NavigationContainer, useIsFocused } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Easing from 'react-native/Libraries/Animated/src/Easing';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer'


enableScreens();
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const stylesHome = StyleSheet.create({

  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'black'
  },
  buttonS: {
    borderRadius: 10,
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonLower: {
    borderRadius: 10,
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textLower: {
    color: 'white',
    fontSize: 14,

  },
  detSub: {
    fontSize: 19,
    paddingTop: 10,
    paddingBottom: 5,
  },
  detSub2: {
    fontSize: 14,
    paddingBottom: 5
  },
  feeds: {
    backgroundColor: "#0f0f0f",
    borderRadius: 10,
    padding: 10
  },
  feedTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    paddingBottom: 5
  },
  hyplink: {
    color: '#064ea1',
    textDecorationLine: 'underline',
    margin: 5,
    fontSize: 15
  }
});

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <View style={
        { marginRight: 10, borderRadius: 10 }
      }>
        <Pressable style={stylesHome.buttonS} onPress={() => { navigation.replace('Home'); }}>
          <Text style={{ color: 'white' }}>Save</Text>
        </Pressable>
      </View>
    )
  })
  return (
    <View style={
      { flex: 1, paddingHorizontal: 30, paddingTop: 30 }
    }>
      <Text style={stylesHome.titleText}>Navigation Tutorial{'\n'}</Text>
      <Text style={{ paddingBottom: 50 }}>Select a screen to go to, or use side drawer to view contact us page.</Text>
      {/* <IonIcon name="ios-home" size={16} color="blue"/> */}
      <Pressable style={stylesHome.buttonLower} onPress={() => navigation.navigate('Details')}>
        <IonIcon name="help-circle" size={22} color="white" /><Text style={stylesHome.textLower}>  Details Screen</Text>
      </Pressable>
      <Text>{'\n'}</Text>
      <Pressable style={stylesHome.buttonLower} onPress={() => navigation.navigate('Settings')}>
        <IonIcon name="construct" size={22} color="white" /><Text style={stylesHome.textLower}>  Settings Screen</Text>
      </Pressable>
    </View>
  )
};

const SettingsScreen = ({ navigation }) => {
  const isFocused = useIsFocused()
  return (
    <View style={
      { flex: 1, paddingHorizontal: 30, paddingTop: 30 }
    }>
      <Text style={stylesHome.titleText}>Settings{'\n'}</Text>
      <Text style={stylesHome.detSub}>If you are new to mobile development</Text>
      <Text style={stylesHome.detSub2}>The easiest way to get started is with Expo CLI. Expo is a set of tools built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator. If you'd like to try out React Native directly in your web browser before installing any tools, you can try out Snack.</Text>

      <Text style={stylesHome.detSub}>If you are already familiar with mobile development</Text>
      <Text style={stylesHome.detSub2}> You may want to use React Native CLI. It requires Xcode or Android Studio to get started. If you already have one of these tools installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.</Text>
      <View style={{ paddingTop: 30 }}>
        <Pressable style={stylesHome.buttonLower} onPress={() => navigation.navigate('Home')}>
          <IonIcon name="home" size={22} color="white" /><Text style={stylesHome.textLower}>  Home Screen</Text>
        </Pressable>
      </View>
    </View>
  )
};

const FeedScreen = props => (
  <ScrollView style={
    { flex: 1, paddingHorizontal: 30, paddingBottom: 60 }
  }>
    <View style={{ paddingTop: 20 }}>
      <View style={stylesHome.feeds}>
        <Text style={stylesHome.feedTitle}>Feed 1</Text>
        <Text style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    </View>
    <View style={{ paddingTop: 20 }}>
      <View style={stylesHome.feeds}>
        <Text style={stylesHome.feedTitle}>Feed 2</Text>
        <Text style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    </View>
    <View style={{ paddingTop: 20 }}>
      <View style={stylesHome.feeds}>
        <Text style={stylesHome.feedTitle}>Feed 3</Text>
        <Text style={{ color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    </View>
  </ScrollView>
)

const DetailsScreen = ({ navigation }) => (
  <View style={
    { flex: 1, paddingHorizontal: 30, paddingTop: 30 }
  }>
    <Text style={stylesHome.titleText}>Details Screen</Text>

    <Text style={stylesHome.detSub}>Easy to Use</Text>
    <Text style={stylesHome.detSub2}>Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.</Text>


    <Text style={stylesHome.detSub}>Components built for iOS and Android</Text>
    <Text style={stylesHome.detSub2}>Platform-specific look-and-feel with smooth animations and gestures.</Text>


    <Text style={stylesHome.detSub}>Completely customizable</Text>
    <Text style={stylesHome.detSub2}>If you know how to write apps using JavaScript you can customize any part of React Navigation.</Text>


    <Text style={stylesHome.detSub}>Extensible platform</Text>
    <Text style={stylesHome.detSub2}>React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API.</Text>

    <View style={{ paddingTop: 30 }}>
      <Pressable style={stylesHome.buttonLower} onPress={() => navigation.navigate('Contributing')}>
        <IonIcon name="globe" size={22} color="white" /><Text style={stylesHome.textLower}>  Contributing to React Native</Text>

      </Pressable>
    </View>
  </View>
);

const MoreDetails = props => (
  <ScrollView style={
    { flex: 1, paddingHorizontal: 30, paddingTop: 30 }
  }>
    <Text Text style={stylesHome.titleText} >Contributing</Text>
    <Text style={stylesHome.detSub}>Reporting Bugs</Text>
    <Text style={stylesHome.detSub2}>You can't write code without writing the occasional bug. Especially as React Navigation is moving quickly, bugs happen. When you think you've found one here's what to do:
      {'\n'}{'\n'}
      Search the existing issues for one like what you're seeing. If you see one, add a 👍 reaction (please no +1 comments). Read through the comments and see if you can provide any more valuable information to the thread
      If there are no other issues like yours then create a new one. Be sure to follow the issue template.
      Creating a high quality reproduction is critical. Without it we likely can't fix the bug and, in an ideal situation, you'll find out that it's not actually a bug of the library but simply done incorrectly in your project. Instant bug fix!</Text>

    <Text style={stylesHome.detSub}>Improving the Documentation</Text>
    <Text style={stylesHome.detSub2}>Any successful projects needs quality documentation and React Navigation is no different.
      {'\n'}{'\n'}
      Read more about the documentation on the react-navigation/react-navigation.github.io repository.</Text>

    <Text style={stylesHome.detSub}>Responding to Issues</Text>
    <Text style={stylesHome.detSub2}>Another great way to contribute to React Navigation is by responding to issues. Maybe it's answering someone's question, pointing out a small typo in their code, or helping them put together a reproduction. If you're interested in a more active role in React Navigation start with responding to issues - not only is it helpful but it demonstrates your commitment and knowledge of the code!
      {'\n'}{'\n'}{'\n'}{'\n'}</Text>
  </ScrollView >
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
      ...TransitionPresets.SlideFromRightIOS
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Contributing" component={MoreDetails} />
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

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Home'
  switch (routeName) {
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

function HomePage({ navigation }) {
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
        options={({ route }) => ({
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

  <View>
    <View style={{ backgroundColor: '#000000', padding: 30 }}>
      <Text Text style={{ fontSize: 30, margin: 10, color: 'white', fontWeight: 'bold' }} >Contact us</Text>
    </View>
    <View style={
      { flex: 1, paddingHorizontal: 30, paddingTop: 30 }
    }>

      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>
          React Native Community:
        </Text>
        <Text style={stylesHome.hyplink}
          onPress={() => Linking.openURL('https://reactnative.dev/help')}>
          The React Native Community
        </Text>
        <Text style={stylesHome.hyplink}
          onPress={() => Linking.openURL('https://reactnative.dev/showcase')}>
          Who's using React Native?
        </Text>
        <Text style={stylesHome.hyplink}
          onPress={() => Linking.openURL('https://stackoverflow.com/questions/tagged/react-native')}>
          Ask Questions on Stack Overflow
        </Text>
        <Text style={stylesHome.hyplink}
          onPress={() => Linking.openURL('https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md')}>
          Contributor Guide
        </Text>
        <Text style={stylesHome.hyplink}
          onPress={() => Linking.openURL('https://dev.to/t/reactnative')}>
          DEV Community
        </Text>
      </View>
      <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18, color: 'black', margin: 5 }}>
          Social:
        </Text>
        <Text style={stylesHome.hyplink}
          onPress={() => Linking.openURL('https://reactnative.dev/blog')}>
          Blog
        </Text>
        <Text style={stylesHome.hyplink}
          onPress={() => Linking.openURL('https://twitter.com/reactnative')}>
          Twitter
        </Text>
        <Text style={stylesHome.hyplink}
          onPress={() => Linking.openURL('https://github.com/facebook/react-native')}>
          Github
        </Text>

        <Text style={{ color: '#6e6e6e', margin: 5 }}>{'\n'}{'\n'}{'\n'}Made by Harsh Vaswani{'\n'}Android club Assignment-2.</Text>
      </View>
    </View>
  </View>


);

const Drawer = createDrawerNavigator();


export default function App() {
  return <NavigationContainer >
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />

    </Drawer.Navigator>
  </NavigationContainer>
}

