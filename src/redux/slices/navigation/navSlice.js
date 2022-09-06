import {createSlice} from '@reduxjs/toolkit';
import types from './types';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    [types.SET_ORIGIN]: (state, action) => {
      state.origin = action.payload;
    },
    [types.SET_DESTINATION]: (state, action) => {
      state.origin = action.payload;
    },
    [types.SET_TRAVEL_TIME_INFO]: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlice.actions;

export default navSlice.reducer;
