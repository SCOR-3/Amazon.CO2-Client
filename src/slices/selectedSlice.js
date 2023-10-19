import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: {},
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    changeSelected: (state, action) => {
      const product = action.payload;
      state.selectedItem = product;
    },
    clearSelected: (state, action) => {
      state.selectedItem = {};
    },
  },
});

export const { changeSelected, clearSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
