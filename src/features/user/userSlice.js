import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { connect, inscription, me } from "./userAPI";
import { useSelector } from "react-redux";

const initialState = {
  me: null,
  token: null,
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
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(inscriptionAsync.fulfilled, (state, action) => {
        state.token = action.payload.token;
      });
  },
});

export const selectUser = (state) => state.user;

export const { storeRedirect } = userSlice.actions;

export const useToken = () => {
  const { token } = useSelector(selectUser);
  return token;
};

export default userSlice.reducer;
