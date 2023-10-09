import React from 'react';
import AdminScreen from './src/components/Admin/AdminScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoeData from './src/components/Admin/ShoeData';
import ShoeList from './src/components/User/ShoeList';
import RoleToggleButtons from './src/components/RoleToggleButtons';
import Cart from './src/components/Cart/Cart';
import Checkout from './src/components/Checkout/Checkout';

const Stack = createStackNavigator();

export default function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Admin'>
        <Stack.Screen name='ToggleButton' component={RoleToggleButtons}/>
        <Stack.Screen name='Admin' component={AdminScreen}/>
        <Stack.Screen name='ShoeData' component={ShoeData}/>
        <Stack.Screen name='User' component={ShoeList}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Checkout' component={Checkout}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}