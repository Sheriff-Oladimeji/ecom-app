import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (item) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i, index) => index !== item),
    })),
  clearCart: () => set((state) => ({ cartItems: [] })),
}));

export default useCartStore;