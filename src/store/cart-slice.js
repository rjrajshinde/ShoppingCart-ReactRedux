import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      //* first we have to get the info about the product that is going in cart
      const newItem = action.payload;
      //* then we have to check the item is already in the cart or not for to increase the quantity and value
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          imgURL: newItem.imgURL,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const removedItemID = action.payload;

      const existingItem = state.itemsList.find(
        (item) => item.id === removedItemID
      );

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(
          (item) => item.id !== removedItemID
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      // const removeItem = state.itemsList.filter((ele) => ele.id != item.id);
      // state.itemsList.pop(removeItem.id);
      // words.filter((word) => word.id != 1);
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
