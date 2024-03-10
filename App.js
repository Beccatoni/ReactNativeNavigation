import React, { createContext, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register';
import Profile from './screens/Profile';
import Context from './components/Context';
import { PracticeProvider, PracticeContext } from './global/PracticeContext';
// import {Context} from './components/Context';



const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <PracticeProvider>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} options={{title:'Home Screen'}}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Profile' component={Profile}/>
    </Stack.Navigator>
  </NavigationContainer>
  </PracticeProvider>
 
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
