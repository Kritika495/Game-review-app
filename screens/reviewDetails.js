import * as React from 'react';
import { Text, View, StyleSheet, Image, Button  } from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';
export default function Review({navigation}) {
function presshandler(){
  navigation.goBack();
}
const rating = navigation.getParam('rating');
  return (
    <View style={globalStyles.container}>
    <Card>
     <Text style={globalStyles.content}>
     {navigation.getParam('title')}
     </Text>

 <Text style={globalStyles.content}>
     {navigation.getParam('body')}
     </Text>
       <View style= {styles.rating}>
      <Text style={globalStyles.content}>
        GameZone rating :
     </Text>

     <Image source = { images.ratings[rating] } />
     
     </View>

</Card>
    </View>
  );
}

const styles = StyleSheet.create({
 
  rating:{
    flexDirection:'row',
    paddingTop:16,
    marginTop:16,
    justifyContent:'center',
    borderTopWidth:1,
    borderTopColor:'#eee',
  }
  
});