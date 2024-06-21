// src/redux/themeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark', // 'light' or 'dark'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
