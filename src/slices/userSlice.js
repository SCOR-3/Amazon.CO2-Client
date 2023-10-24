import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const loginUser = createAsyncThunk("user/login", async({email,password}, thunkAPI))
export const login = createAsyncThunk("login", async (data) => {
  try {
    const res = await axios.post(
      "https://graceful-foal-hose.cyclic.app/v1/user/login",
      data
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

// export const buyCoupon = createAsyncThunk("buyCoupon", async (data)=>{
//   try {
//     const res = 
//   } catch (error) {
    
//   }
// })

const initialState = {
  userInfo: {},
  isLoading: false,
  error: null,
  isAuth: false
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login: async (state, action) => {
    //   const { email, password } = action.payload;
    //   try {
    //     const { data } = await axios.post(
    //       "https://graceful-foal-hose.cyclic.app/v1/user/login",
    //       { email, password }
    //     );

    //     localStorage.setItem("userInfo", JSON.stringify(data));
    //     state.userInfo = data;
    //   } catch (error) {
    //     state.error = error;
    //   }
    // },
    // getUserInfo: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.isAuth = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      console.error(action.payload);
    });
  },
});

// export const { login } = userSlice.actions;
export default userSlice.reducer;
