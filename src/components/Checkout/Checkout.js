import { View, Text, StyleSheet,Alert } from 'react-native'
import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector,useDispatch } from 'react-redux';

export default function Checkout() {
    const itemDetails = useSelector(state=>state.cart.cartItems);

  return (
    <View>
        {itemDetails && itemDetails.map(item=>(
            <Card key={item.id} style={styles.card}>
            <Card.Content style={styles.content}>
                <Title>{item.brand}</Title>
                <Paragraph style={styles.price}>Grand Total: </Paragraph><Paragraph>${item.price}</Paragraph>
            </Card.Content>
        </Card>
        ))}
        <Card.Actions style={styles.proceed_payment_button}>
                <Button
                    mode="contained" 
                    buttonColor="#6200ee" 
                    labelStyle={styles.buttonLabel}
                    contentStyle={styles.buttonContent}
                    onPress={() => Alert.alert('Order placed successfully!')}
                    uppercase={false} 
                >
                    Proceed to payment
                </Button>
          </Card.Actions>
    </View>
  )
}
const styles = StyleSheet.create({
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
      price:{
        fontWeight:900
      },
      buttonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      buttonContent: {
        height: 50, // Adjust the height of the button
      },
})