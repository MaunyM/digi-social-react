import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { connect, inscription, me } from "./userAPI";

const initialState = {
  me: null,
  authent: false,
  friend: [],
  redirect: "/",
};

export const meAsync = createAsyncThunk("users/me", async (token) => {
  return await me(token);
});

export const loginAsync = createAsyncThunk("users/login", async (user) => {
  return await connect(user);
});

export const inscriptionAsync = createAsyncThunk(
  "users/inscription",
  async (user) => {
    return await inscription(user);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeRedirect: (state, action) => {
      state.redirect = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(meAsync.fulfilled, (state, action) => {
        state.me = action.payload;
      })
      .addCase(inscriptionAsync.fulfilled, (state) => {
        state.authent = true;
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.authent = true;
      });
  },
});

export const selectUser = (state) => state.user;

export const { storeRedirect } = userSlice.actions;

export default userSlice.reducer;
