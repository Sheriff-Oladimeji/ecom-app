import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useCartStore();

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Your Cart is Empty</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Cart</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.products}
          scrollEnabled={false}
          renderItem={({ item, index }) => (
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
              <TouchableOpacity
                style={styles.cart}
                onPress={() => removeFromCart(index)}
              >
                <Text style={styles.cartText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity style={styles.cart} onPress={() => clearCart()}>
          <Text style={styles.cartText}>Clear Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginVertical: 20,
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
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowRadius: 5,
    letterSpacing: 1.5,
  },
});
