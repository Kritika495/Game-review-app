import  React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routers/drawer'
// You can import from local files
import Home from './screens/home';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const getfonts = ()=>Font.loadAsync({
'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
});
getfonts();
export default function App() {
  
  return(
    
      <Navigator/>
    
  )
  
  
}

