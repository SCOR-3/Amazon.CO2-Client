import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: async (state, action) => {
      const { email, password } = action.payload;
      try {
        const { data } = await axios.post("", { email, password });
        localStorage.setItem("userInfo", JSON.stringify(data));
        state.userInfo = data;
      } catch (error) {
        state.error =
          error
      }
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
