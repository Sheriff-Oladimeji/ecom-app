import React from "react";
import { FlatList, Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import useProductStore from "../store/productStore";

const ProductGrid = () => {
  const { products } = useProductStore();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.products}
        scrollEnabled={false}
      
      
     
        
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1545165393-011d14b0dcf0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: 150, height: 150 }}
            />
            <View style={styles.productInfo}>
              <Text style={styles.itemName}>{item.itemName}</Text>
              <Text style={styles.itemPrice}>₦{item.itemPrice}</Text>
                </View>
                <TouchableOpacity style={styles.cart}>
                    <Text style={styles.cartText}>Add To Cart</Text>
                </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ProductGrid;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
  },
  product: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  products: {
 display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginVertical: 20,
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
  },
  cart: {
    backgroundColor: "#007070",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
      justifyContent: "center",
    marginTop: 10,
    },
    cartText: {
        color: "#fff",
        fontWeight: "bold",
    fontSize: 16,
    }
});
