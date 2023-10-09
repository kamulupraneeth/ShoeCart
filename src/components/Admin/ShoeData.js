import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import EditModal from './EditModal'
import { persistor } from '../../store/ConfigureStore';


export default function ShoeData({navigation}) {

    const shoeData = useSelector(state=>state.shoes);
    const[shoeDetails,setShoeDetails] = useState(shoeData);
    const [selectedShoe, setSelectedShoe] = useState(null);
    const [tempShoeData, setTempShoeData] = useState({brand:'',size:'',price:''});
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch();

    const handleEdit = (shoe) => {
        setSelectedShoe(shoe);
        setTempShoeData({...shoe});
        setModalVisible(true);
    }

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: id });
        persistor.flush();
    }

    
  return (
    <ScrollView style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.headerCell}>ID</Text>
            <Text style={styles.headerCell}>Brand</Text>
            <Text style={styles.headerCell}>Size</Text>
            <Text style={styles.headerCell}>Price</Text>
            <Text style={styles.headerCell}>Action</Text>
        </View>
        {shoeDetails ? shoeDetails.map((product, index) => (
                <>
                    <View key={product.id} style={styles.row}> 
                            <>
                                <Text style={styles.cell}>{index + 1}</Text>
                                <Text style={styles.cell}>{product.brand}</Text>
                                <Text style={styles.cell}>{product.size}</Text>
                                <Text style={styles.cell}>{product.price}</Text>
                            </>
                       
                        <View>
                            <TouchableOpacity onPress={()=>handleEdit(product)}>
                                <Text style={styles.edit_button}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>handleDelete(product.id)}>
                                <Text style={styles.delete_button}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
        )) : null}
        <EditModal modalVisible={modalVisible} setModalVisible={setModalVisible} selectedShoe={selectedShoe} setSelectedShoe={setSelectedShoe} setTempShoeData={setTempShoeData} tempShoeData={tempShoeData} setShoeDetails={setShoeDetails}/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      border:'1px solid red',
      margin:15
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 5,
      paddingHorizontal:10,
      borderBottomWidth: 1,
      borderBottomColor: '#333'
    },
    headerCell: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    cell: {
      fontSize: 15,
    },
    edit_button:{
        border:'1px solid',
        backgroundColor:'#00A36C',
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10,
        marginBottom:5,
        color:"#fff"
    },
    delete_button:{
        border:'1px solid',
        backgroundColor:'#C41E3A',
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10,
        color:"#fff"
    }
  });