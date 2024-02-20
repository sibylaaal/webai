// store.js
'use client'
import { configureStore } from '@reduxjs/toolkit';
import AuthSlices from '../slices/AuthSlices';

const store = configureStore({
  reducer: AuthSlices,
});

export default store;
