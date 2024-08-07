import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DataProcess } from '../../types/state';
import { fetchComments, fetchNearOffersAction, fetchOffersAction, getOfferAction } from '../api-actions';

const initialState: DataProcess = {
  offers: [],
  offerInfo: undefined,
  nearOffers: [],
  comments: [],
  isOffersDataLoading: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(getOfferAction.fulfilled, (state, action) => {
        state.offerInfo = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  },
});
