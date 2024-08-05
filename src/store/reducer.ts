import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setOffersDataLoadingStatus, setSort } from './action';
import { Sort } from '../const';
import { City, Offers } from '../types/types';

type InitialState = {
  city: City;
  offers: Offers;
  sort: Sort;
  isOffersDataLoading: boolean;
};

const initialState: InitialState = {
  city: {
    'name': 'Paris',
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13
    }
  },
  offers: [],
  sort: Sort.popular,
  isOffersDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload.sort;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export {reducer};
