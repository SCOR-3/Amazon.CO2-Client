import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import selectedReducer from "./slices/selectedSlice";
import selectedProduct from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    selected: selectedReducer,
    product: selectedProduct,
    user: persistReducer(persistConfig, userReducer),
  },
});
const persistor = persistStore(store)
export {store, persistor};
