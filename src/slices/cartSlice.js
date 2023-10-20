import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  bill: 0,
  itemsCount: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { item, seller } = action.payload;
      item.seller = seller;
      item.quantity = 1;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    },
    changeItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const target = state.cartItems.find((item) => item.id == id);
      target.quantity = quantity;
    },
    calculateBill: (state, action) => {
      let count = 0
      let total = 0

      // Calculate total amount and items count
      state.cartItems.forEach(item => {
          total += item.price * item.quantity
          count += item.quantity
      })
      

      state.itemsCount = count
      state.bill = total
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem,calculateBill, changeItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
