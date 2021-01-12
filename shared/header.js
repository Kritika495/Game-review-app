import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation, title}){
  const openmenu = () => {
    navigation.openDrawer();
  }
  return(
    <ImageBackground source={require('../images/game_bg.png')}  style={styles.header}>
        <MaterialIcons name='menu' size={28} onPress={openmenu} style = {styles.icon}/>
        <View style={styles.headerTitle}>
           <Image source={require('../images/heart_logo.png')}  style={styles.heart}/>
           <Text style={styles.headerText}> {title} </Text>
        </View>
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header:{
    height: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    
  },
  headerText:{
    
    fontWeight: 'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1,
    textAlign:'center',
  },
  icon:{
    position:'absolute',
    left:10
  },
  heart:{
    height:16,
    width:16,
    marginTop:6,

  },
  headerTitle:{
    flexDirection:'row',
  }
})