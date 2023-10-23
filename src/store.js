import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import selectedReducer from "./slices/selectedSlice";
import selectedProduct from "./slices/productSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    selected: selectedReducer,
    product: selectedProduct,
    user: userReducer,
  },
});

export default store;
