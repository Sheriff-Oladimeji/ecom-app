import { create } from "zustand";

import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage";
const useCartStore = create(persist(
  (set, get) => ({
    cartItems: [],
    addToCart: (product) => set((state) => ({ cartItems: [...state.cartItems, product] })),
    removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter((product) => product.id !== id) })),
    clearCart: () => set((state) => ({ cartItems: [] })),
  }),
  {
    name: "cart",
    storage: createJSONStorage(() => AsyncStorage)
  }
));

export default useCartStore;
