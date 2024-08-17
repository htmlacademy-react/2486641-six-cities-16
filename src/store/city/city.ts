import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { City } from '../../types/types';
import { DefaultCity, NameSpace } from '../const';

type InitialState = {
  city: City;
}

const initialState: InitialState = {
  city: DefaultCity,
};

export const city = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: City}>) => {
      state.city = action.payload.city;
    }
  },
});

export const {changeCity} = city.actions;
