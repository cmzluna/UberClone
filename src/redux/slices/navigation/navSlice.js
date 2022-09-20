import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  origin: {
    description: '',
    location: {
      lat: '',
      lng: '',
    },
  },
  destination: {
    description: '',
    location: {
      lat: '',
      lng: '',
    },
  },
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

const {actions, reducer} = navSlice;

export const {setOrigin, setDestination, setTravelTimeInformation} = actions;
export default reducer;
