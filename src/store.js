import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import selectedReducer from "./slices/selectedSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    selected: selectedReducer,
  },
});

export default store;
