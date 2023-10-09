import React from 'react'
import { StyleSheet,FlatList } from 'react-native';
import { Provider as PaperProvider, Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/shoeActions';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {

  const cartItems = useSelector(state=>state.cart);
  const data = JSON.stringify(cartItems);
  const parsedCartItems = JSON.parse(data);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }

  return (
    <>
    <FlatList
      data={parsedCartItems.cartItems}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <>
        
        <Card key={item.id} style={styles.card}>
            <Card.Actions>
                <Button
                    mode="contained" 
                    buttonColor="red" 
                    labelStyle={styles.button_remove_Label}
                    contentStyle={styles.button_remove_Content}
                    onPress={() => handleRemoveFromCart(item)}
                    uppercase={false} 
                >
                    Remove
                </Button>
          </Card.Actions>
            <Card.Content style={styles.content}>
                    <Title>{item.brand}</Title>
                    <Paragraph style={styles.size}>Size: {item.size}</Paragraph>
                    <Paragraph style={styles.price}>Price: ${item.price}</Paragraph>
            </Card.Content>
        </Card>
        </>
      )}
    />
         {parsedCartItems.cartItems.length > 0 ?  
         <Card.Actions style={styles.proceed_button}>
                <Button
                    mode="contained" 
                    buttonColor="#6200ee" 
                    labelStyle={styles.buttonLabel}
                    contentStyle={styles.buttonContent}
                    onPress={() => navigation.navigate('Checkout')}
                    uppercase={false} 
                >
                    Proceed to checkout
                </Button>
          </Card.Actions>
                  :
                null
          }
          </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    margin:10
  },
  card: {
    margin: 20,
    height:100,
    justifyContent:'center'
  },
  content:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  action:{
      backgroundColor:'#1e1e2c',
      height:50,
      width:150,
      fontSize:20,
      color:'#fff',
  },
  button_remove_Label:{
    fontSize: 12  ,
    fontWeight: 'bold',
    justifyContent:'center'
  },
  button_remove_Content: {
    height: 40, // Adjust the height of the button
  },
  buttonLabel: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonContent: {
      height: 50, // Adjust the height of the button
    },
    proceed_button:{
      marginBottom:20,
      marginRight:10
    }
});