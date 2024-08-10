import { createSlice } from '@reduxjs/toolkit';
import { DataProcess } from '../../types/state';
import { fetchComments, fetchFavorites, fetchNearOffersAction, fetchOffersAction, getOfferAction } from '../api-actions';
import { NameSpace } from '../const';

const initialState: DataProcess = {
  offers: [],
  offerInfo: undefined,
  nearOffers: [],
  comments: [],
  isOffersDataLoading: false,
  hasError: false,
  favoriteOffers: [],
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(getOfferAction.fulfilled, (state, action) => {
        state.offerInfo = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  },
});
