import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import navReducer from './slices/navigation/navSlice';

const createDebugger = require('redux-flipper').default; // <-- ADD THIS

export const store = configureStore({
  reducer: {
    navigation: navReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()), // <-- ADD THIS
});
