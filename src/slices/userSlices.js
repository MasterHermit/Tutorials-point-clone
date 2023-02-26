import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isDark: false,
  },
  reducers: {
    changeDarkMode(state, action) {
      state.isDark = action.payload;
    },
  },
});

export const { changeDarkMode } = userSlice.actions;
export const userReducer = userSlice.reducer;
