import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  bill: 0,
  itemsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      let { item, seller } = action.payload;
      item = JSON.parse(JSON.stringify(item));
      item.selectedSeller = seller;
      item.quantity = 1;
      const existItem = state.cartItems.find(
        (x) => x._id === item._id && seller._id === x.selectedSeller._id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
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
      const { id, sellerId, quantity } = action.payload;
      const target = state.cartItems.find((item) => (item._id === id && item.selectedSeller._id === sellerId));
      target.quantity = quantity;
    },
    calculateBill: (state, action) => {
      let count = 0;
      let total = 0;
      let carbonPoints = 0;
      state.cartItems.forEach((item) => {
        total += item.selectedSeller.price * item.quantity;
        count += item.quantity;
        carbonPoints += item.selectedSeller.carbon_points * item.quantity;
      });

      state.itemsCount = count;
      state.bill = total;
      state.carbonPoints = carbonPoints;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  calculateBill,
  changeItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
