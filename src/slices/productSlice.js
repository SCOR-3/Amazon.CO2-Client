import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeSelectedProduct: (state, action) => {
      const product = action.payload;
      state.selectedProduct = product;
    },
    clearSelectedProduct: (state, action) => {
      state.selectedProduct = {};
    },
  },
});

export const { changeSelectedProduct, clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
