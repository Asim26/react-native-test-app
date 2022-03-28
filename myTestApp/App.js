//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './src/Screens/LoginScreen/';
import RegisterScreen from './src/Screens/RegisterScreen';
import SplashScreen from './src/Screens/SplashScreen';
import TestScreen from './src/Screens/TestScreen';
import DashboardScreen from './src/Screens/DashboardScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// create a component
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="TestScr"
            component={TestScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
