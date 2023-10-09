import { View, Text , TextInput, StyleSheet, Button, Image, TouchableOpacity,Alert,ScrollView} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { editShoe,addShoe } from '../../actions/shoeActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RoleToggleButtons from '../RoleToggleButtons';
import { v4 as uuidv4 } from 'uuid';

export default function AdminScreen({navigation}) {
const [brand,setBrand] = useState('');
const [size,setSize] = useState('');
const [price,setPrice] = useState('');
const [id,setId] = useState(null)
const [image,setImage] = useState(null);
const [message,setMessage] = useState(false);

const [editingId,setEditingId] = useState(null);

const [brandError, setBrandError] = useState('');
const [sizeError, setSizeError] = useState('');
const [priceError, setPriceError] = useState('');

const dispatch = useDispatch();

const newId = Math.floor(Math.random() * 1000);

const handleAddShoe = () => {

  // Validate brand
  if(!brand){
    setBrandError('Brand is required.');
  }
  else{
    setBrandError('');
  }

  // Validate size
  if(!size){
    setSizeError('Size is required.')
  }
  else{
    setSizeError('')
  }

  // Validate price
  if(!price){
    setPriceError('Price is required.')
  }
  else{
    setPriceError('');
  }

  // If all fields are filled, continue processing the data
  if(brand && size && price){
    const shoeData = {
      id:newId,
      brand,
      size,
      price
  }
      dispatch(addShoe(shoeData));
      setBrand('');
      setSize('');
      setPrice('');
      setId(null);

    Alert.alert('Data Saved Successfully!');
  }    
}

const handleEditShoe = () => {
    if(editingId){
        dispatch(editShoe(editingId,{
            brand,
            size,
            price,
            image
        }))
        setEditingId(null);
    }
}

const handleShowSavedProduct= () => {
    navigation.navigate('ShoeData');
}

  return (
    <ScrollView>
      <RoleToggleButtons/>
      <TouchableOpacity style={styles.show_all} onPress={handleShowSavedProduct}>
            <Text style={styles.showButton}>Show all</Text>
        </TouchableOpacity>
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        value={brand}
        onChangeText={setBrand}
        placeholder='Brand'
      />

      <Text style={styles.errorText}>{brandError}</Text>

       <TextInput 
        style={styles.input} 
        value={size}
        onChangeText={setSize}
        placeholder='Sizes (e.g. 8,9,10)'
      />

      <Text style={styles.errorText}>{sizeError}</Text>

       <TextInput 
        style={styles.input} 
        value={price}
        onChangeText={setPrice}
        placeholder='Price'
      />

      <Text style={styles.errorText}>{priceError}</Text>
      <Button 
      title='Add shoe' 
      onPress={handleAddShoe} 
     />
      {editingId && <Button title='Edit shoe' onPress={handleEditShoe}/>}
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        margin:20
    },
    input : {
        height:40,
        borderColor:'gray',
        borderWidth:1,
        paddingHorizontal:10,
        marginBottom:10
    },
    imagePicker:{
        alignItems:'center',
        justifyContent:'center',
        height:150,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:15,
    },
    image:{
        height:150,
        width:'100%',
        marginBottom:15,
    },
    show_all:{
      borderWidth:0,
      borderColor:'#333',
      paddingHorizontal:15,
      paddingVertical:10,
      width:150,
      marginLeft:'auto',
      marginTop:20,
      marginRight:20,
      backgroundColor:'#696969',
      borderRadius:5
    },
    showButton:{
      fontSize:14,
      textAlign:'center',
      color:'#fff',
      fontWeight:'700',
      letterSpacing:1.3
    },
   errorText:{
    color: 'red',
    marginBottom:10
   }
})