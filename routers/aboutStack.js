import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Review from '../screens/reviewDetails';
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header'
const screens = {
  About:{
    screen: About,
    navigationOptions:({navigation})=>{
      return{
      headerTitle: ()=> <Header navigation={navigation} title='About GameZone'/>}
    }
  }
}
const AboutStack = createStackNavigator(screens,
{defaultNavigationOptions:{
  headerTintColor:'#444',
  headerStyle:{backgroundColor:'white', height:60}
}});
export default AboutStack;