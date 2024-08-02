import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { mockOffers } from '../mocks/offers';

const initialState = {
  cityName: 'Paris',
  offers: mockOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.cityName = action.payload.cityName;
  });
});

export {reducer};
