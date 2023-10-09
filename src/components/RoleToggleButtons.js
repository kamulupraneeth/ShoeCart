import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function RoleToggleButtons() {

  const navigation = useNavigation();
  const [activeSection, setActiveSection] = useState('admin');

  // const handleUser = () => {
   
  // }

  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.admin,
          {backgroundColor:activeSection === 'admin' ? '#00A36C' : '#D3D3D3'}]} 
          onPress={()=>{
            setActiveSection('admin')
            navigation.navigate('Admin')
          }}
        >
          <Text style={styles.admin_section}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.user,{backgroundColor:activeSection === 'user' ? '#00A36C' : '#D3D3D3'}]} 
        onPress={()=>{
          setActiveSection('user'),
          navigation.navigate('User');
        }}>
            <Text style={styles.user_section}>User</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        gap:10,
        margin:20
      },
      admin:{
        borderWidth: 0, 
        paddingHorizontal:10,
        paddingVertical:15,
        width:180,
        borderRadius:5,
        fontSize:17
      },
      user:{
        borderWidth: 0, 
        paddingHorizontal:10,
        paddingVertical:15,
        width:180,
        backgroundColor:'#D3D3D3',
        borderRadius:5,
        fontSize:17
      },
      admin_section:{
        fontSize:14,
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        letterSpacing:1.3
      },
      user_section:{
        fontSize:14,
        textAlign:'center',
        color:'#fff',
        fontWeight:'700',
        letterSpacing:1.3
      }
})