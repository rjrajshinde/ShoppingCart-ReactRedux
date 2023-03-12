import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: { alert: null },
  reducers: {
    showAlert(state, action) {
      state.alert = {
        type: action.payload.type,
        message: action.payload.message,
        // open: action.payload.open,
      };
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice;
