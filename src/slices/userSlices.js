import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isDark: false,
  },
  reducers: {
    changeDarkMode(state, aciton) {
      state.isDark = aciton.payload;
    },
  },
});

export const { changeDarkMode } = userSlice.actions;
export const userReducer = userSlice.reducer;
