import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { connect, me } from "./userAPI";

const initialState = {
  me: null,
  token: null,
  friend: [],
};

export const meAsync = createAsyncThunk("users/me", async (token) => {
  return await me(token);
});

export const loginAsync = createAsyncThunk("users/login", async (user) => {
  return await connect(user);
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(meAsync.fulfilled, (state, action) => {
        state.me = action.payload;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.token = action.payload.token;
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
