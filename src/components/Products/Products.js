import React, {useContext} from "react";
import { DataContext } from "../Context/DataContext";
import {Pressable,Text,View,FlatList,Image,StyleSheet } from "react-native";
const Products = ()=>{
    const {buyProducts} = useContext(DataContext);
    const productos =[
        {
            id: 1,
            name: "Celular",
            price: 19.99,
            quantity: 2,
            total: 39.98,
            image: "https://c0.klipartz.com/pngpicture/285/180/gratis-png-iphone-x-iphone-8-phone-apple-un-companero-de-cuarto-que-juega-con-un-telefono-celular.png"
          },
          {
            id: 2,
            name: "Audifonos",
            price: 29.99,
            quantity: 1,
            total: 29.99,
            image:"https://www.uraniocenter.com/public/img/products/prd_wc5f7ba2d133699.png"
          },
          {
            id: 3,
            name: "Computadora",
            price: 39.99,
            quantity: 3,
            total: 119.97,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Computadora-PC.png"
          },
          {
            id: 4,
            name: "Smart TV",
            price: 39.99,
            quantity: 3,
            total: 119.97,
            image: "https://c0.klipartz.com/pngpicture/567/42/gratis-png-smart-tv-led-backlit-lcd-samsung-television-de-alta-definicion-tv-smart-thumbnail.png"
          },
          {
            id: 5,
            name: "Reloj inteligente",
            price: 39.99,
            quantity: 3,
            total: 119.97,
            image: "https://w7.pngwing.com/pngs/406/744/png-transparent-apple-watch-series-3-apple-watch-series-1-smartwatch-apple-gadget-electronics-apple-watch-thumbnail.png"
          },
        ];
        const handleBuyPress=(product)=>{
            buyProducts(product)
        }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>ECOMMERCE APP</Text>
            <FlatList
            data={productos}
            renderItem={({item})=>(
                <View style={styles.productItem}>
                    <Image source={{uri: item.image}} style={styles.productImage}/>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>Precio: {item.price} $</Text>
                    <Pressable style={styles.buyButton} onPress={()=>handleBuyPress(item)}>
  <Text style={styles.buyButtonText}>COMPRAR</Text>
</Pressable>
                </View>
    )}
            keyExtractor={(item)=> item.id}/>
        </View>
    );

};

const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        marginTop:50,
        paddingBottom:10,
    },
    header:{
        fontSize:24,
        fontWeight: "bold",
        marginBottom:12,
        textAlign: "center",
    },
    productItem:{
        borderBottomWidth:0,
        borderColor:"#ccc",
        paddingVertical: 18,
        alignItems: "center",
    },
    productImage:{
        width:170,
        height:145,
        resizeMode:"cover",
        marginBottom:8,
    },
    productName:{
        fontSize:18,
        marginBottom:4,
    },
    productPrice:{
        fontSize:16,
        color:"green",
    },
    buyButton:{
        backgroundColor:"#1bcb7f",
        padding:8,
        width:150,
        marginTop:8,
        borderRadius:5,
    },
    byButtonText:{
        color:"white",
        fontSize:16,
        textAlign:"center",
    }
    
});
export default Products