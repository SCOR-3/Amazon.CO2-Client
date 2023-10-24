import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coupons: [],
};

const productSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {
    getCoupons: (state, action) => {
      const product = action.payload;
      state.selectedProduct = product;
    },
    buyCoupon: (state, action) => {
      state.selectedProduct = {};
    },
  },
});

export const { changeSelectedProduct, clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
