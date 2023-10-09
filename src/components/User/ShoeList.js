import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { Provider as PaperProvider, Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addToCart } from '../../actions/shoeActions';

const ShoeList = () => {
    const products = useSelector(state=>state.shoes);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        console.log("product value",product);
        dispatch(addToCart(product));
        navigation.navigate('Cart')
    }

  return (
    <ScrollView style={styles.container}>
        {products.map(product => (
        <Card key={product.id} style={styles.card}>
            {/* <Card.Cover source={{ uri: product.image }} /> */}
            <Card.Content style={styles.content}>
                <Title>{product.brand}</Title>
                    <View style={styles.details}>
                    <Paragraph style={styles.size}>Size: {product.size}</Paragraph>
                    <Paragraph style={styles.price}>Price: ${product.price}</Paragraph>
                </View>
            </Card.Content>
            <Card.Actions>
                <Button
                    mode="contained" 
                    buttonColor="#6200ee" 
                    labelStyle={styles.buttonLabel}
                    contentStyle={styles.buttonContent}
                    onPress={() => handleAddToCart(product)}
                    uppercase={false} 
                >
                    Add To Cart
                </Button>
          </Card.Actions>
        </Card>
        ))}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      margin:10
    },
    card: {
      marginVertical: 8,
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    action:{
        backgroundColor:'#1e1e2c',
        height:50,
        width:150,
        fontSize:20,
        color:'#fff',
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      buttonContent: {
        height: 50, // Adjust the height of the button
      },
  });

export default ShoeList;
