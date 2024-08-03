import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setSort } from './action';
import { mockOffers } from '../mocks/offers';
import { Sort } from '../const';

const initialState = {
  city: {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  offers: mockOffers,
  sort: Sort.popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload.sort;
    });
});

export {reducer};
