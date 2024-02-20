


'use client'
// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    Login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
});

export const { Login, logout } = authSlice.actions;


export default authSlice.reducer;
