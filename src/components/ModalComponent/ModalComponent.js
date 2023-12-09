import React, {useState,useContext} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, FlatList} from 'react-native';
import { DataContext } from '../Context/DataContext';
const ModalComponent = () => {
    const {cart} = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);
  const total = cart.reduce((acc, el)=>acc+el.quantity *el.price,0)
  return (
    <View>
        <Pressable
        style={styles.modalbutton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.cartIcon}>🛒</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>❌</Text>
            </Pressable>
            <Text style={styles.modalText}>Cart Items:</Text>
            <FlatList
            data={cart}
            renderItem={({item})=>(
                <View style={styles.cartItem}>
                    <Text>{item.name}</Text>
                    <Text>{item.quantity}</Text>
                    <Text>Total: ${item.quantity * item.price}</Text>
                </View>
            )}
            keyExtractor={(item)=> item.id}/>
            <Text>TOTAL:${total}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderTopLeftRadius:20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:"100%"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    left:120,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight:"bold"
  },
  modalbutton:{
    position:"fixed",
    botton:30,
    let:150,
    backgroundColor:"#111111",
    padding:10,
    borderRadius:30,

  },
  cartIcon:{
    fontSize:20,
  }
});

export default ModalComponent;