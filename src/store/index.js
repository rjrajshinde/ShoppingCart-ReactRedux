import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alert.slice";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    modal: modalSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
