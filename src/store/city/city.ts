import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DefaultCity } from '../../const';
import { City } from '../../types/types';
import { NameSpace } from '../const';

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
