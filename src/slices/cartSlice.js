import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  bill: 0,
  itemsCount: 0,
  isCarbonNeutralDelivery: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let { item, seller } = action.payload;
      item = JSON.parse(JSON.stringify(item));
      item.selectedSeller = seller;
      item.quantity = 1;
      item.type = "Product";
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
    addCredit: (state, action) => {
      let { item } = action.payload;
      item = JSON.parse(JSON.stringify(item));
      item.type = "Carbon";
      item.quantity = 1;
      const existItem = state.cartItems.find((x) => x._id === item._id);
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
      const target = state.cartItems.find(
        (item) => item._id === id && item.selectedSeller._id === sellerId
      );
      target.quantity = quantity;
    },
    changeCreditQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const target = state.cartItems.find((item) => item._id === id);
      target.quantity = quantity;
    },
    calculateBill: (state, action) => {
      let count = 0;
      let total = 0;
      let carbonPoints = 0;
      state.cartItems.forEach((item) => {
        total +=
          item.type === "Product"
            ? item.selectedSeller.price * item.quantity
            : item.price * item.quantity;
        count += item.quantity;
        if (item.type === "Product")
          carbonPoints += item.selectedSeller.carbon_points * item.quantity;
        if (state.isCarbonNeutralDelivery && item.type === "Product")
          carbonPoints += 2 * item.quantity;
      });

      state.itemsCount = count;
      state.bill = total;
      state.carbonPoints = carbonPoints;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    toggleCarbonNeutralDelivery: (state, action) => {
      state.isCarbonNeutralDelivery = !state.isCarbonNeutralDelivery;
    },
    buyCart: (state, action) => {},
  },
});

export const {
  addItem,
  addCredit,
  removeItem,
  calculateBill,
  changeItemQuantity,
  clearCart,
  toggleCarbonNeutralDelivery,
  changeCreditQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
