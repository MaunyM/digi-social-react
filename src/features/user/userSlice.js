import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { me } from "./userAPI";

const initialState = {
  me: null,
  friend: []
};

export const meAsync = createAsyncThunk(
  "users/me",
  async () => {
    return await me();
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(meAsync.fulfilled, (state, action) => {
        state.me = action.payload;
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
