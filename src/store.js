import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import selectedReducer from "./slices/selectedSlice";
import selectedProduct from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    selected: selectedReducer,
    product: selectedProduct,
  },
});

export default store;
