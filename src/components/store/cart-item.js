import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  items: [],
  totalAmount: 0,
};
const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalAmount++;
      if (!exisitingCartItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exisitingCartItem.quantity++;
        exisitingCartItem.totalPrice =
          exisitingCartItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exisitingCartItem = state.items.find((item) => item.id == id);
      state.totalAmount--;
      if (exisitingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingCartItem.quantity--;
        exisitingCartItem.totalPrice =
          exisitingCartItem.totalPrice - exisitingCartItem.price;
      }
    },
    reserCart() {
      return initialCartState;
    },
  },
});
export default cartItemSlice;
export const cartItemAction = cartItemSlice.actions;
