import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffer, loadNearOffers, loadOffers, requireAuthorization, setOffersDataLoadingStatus, setSort } from './action';
import { AuthorizationStatus, Sort } from '../const';
import { City, OfferInfo, Offers } from '../types/types';

type InitialState = {
  city: City;
  offers: Offers;
  sort: Sort;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  offerInfo: OfferInfo | undefined;
  nearOffers: Offers;
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
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  offerInfo: undefined,
  nearOffers: [],
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offerInfo = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    });
});

export {reducer};
