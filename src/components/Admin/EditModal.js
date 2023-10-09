import { View, Text, Modal,StyleSheet,TextInput,Button } from 'react-native';
import React,{useState} from 'react';

export default function EditModal({modalVisible,setModalVisible,selectedShoe,setSelectedShoe,setTempShoeData,tempShoeData,setShoeDetails}) {

  return (
    <View>
      {selectedShoe && ( <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Shoe Brand:</Text>
                <TextInput
                  value={tempShoeData.brand}
                  onChangeText={brand => setTempShoeData(prev => ({ ...prev, brand }))}
                  style={styles.edit_shoe}
                />

            <Text>Shoe Size:</Text>
                <TextInput
                  value={String(tempShoeData.size)}
                  onChangeText={size => setTempShoeData(prev => ({ ...prev, size:Number(size) }))}
                  style={styles.edit_shoe}
                />

            <Text>Shoe Price:</Text>
                <TextInput
                  value={String(tempShoeData.price)}
                  onChangeText={price => setTempShoeData(prev => ({ ...prev, price:Number(price) }))}
                  style={styles.edit_shoe}
                />
            <Button
              title="Save"
              onPress={() => {
                setShoeDetails(prevData=>{
                  return prevData.map(item=>
                    item.id === selectedShoe.id ? tempShoeData : item
                    );
                })
                setModalVisible(false);
                setTempShoeData({brand: '', size: '', price: ''});
              }}
            />
             <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>)}
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  edit_shoe:{
    border:'1px solid red',
  }
})