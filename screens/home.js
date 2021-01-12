import  React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button, FlatList, TouchableOpacity , Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';
import * as yup from 'yup';
export default function Home({navigation}) {
  function presshandler(){
 navigation.navigate('Review');

  }
  const [reviews, setreviews] =  useState([
    {title:'Zelda, Breadth of fresh air' , rating:5, body:'lorem ipsum', key:'1'},
    {title:'Gotta catch them all (again)', rating:4, body:'lorem ipsum', key:'2'},
     {title:'Final fantasy', rating:4, body:'lorem ipsum', key:'3'},
  ]);

  const [modalopen, setModalopen] = useState(false);

  const addReview = (review) =>{
    review.key = Math.random().toString();
    setreviews((curr)=>{
      return [review, ...curr]
      
    })
    setModalopen(false);
  }
  return (
    <View style={globalStyles.container}>
    <Modal visible={modalopen } animationType='slide'  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss }>
     <View style={styles.modalContent}>
      <MaterialIcons name="close" size={24} color="black"
      style = {{...styles.toggle, ...styles.close} }
       onPress={()=>setModalopen(false)}
       />
      
      <ReviewForm addReview={addReview} />
     </View>
     </TouchableWithoutFeedback>

    </Modal>
    <MaterialIcons name="add" size={24} color="black" 
    onPress={()=>setModalopen(true)}
    style={styles.toggle}
     />
    <FlatList
    data={reviews}
    renderItem={({item})=>
      <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
       <Card> 
       
        <Text style={globalStyles.content}>{item.title}</Text>
        
        </Card>
      </TouchableOpacity>
    }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  toggle:{
   marginBottom:10,
   alignSelf:'center',
   borderWidth:1,
   borderRadius:10,
   borderColor:'#f2f2f2',
  },

  close:{
    marginTop:20,
  },
  modalContent:{
    flex:1,
  }
});
