import {configureStore} from '@reduxjs/toolkit';
import navReducer from './slices/navigation/navSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
