import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNearOffersAction, fetchOffersAction, getOfferAction } from './thunks.ts';
import { NameSpace } from '../const';
import { OfferInfo, Offers } from '../../types/types';


export type InitialState = {
  offers: Offers;
  offerInfo: OfferInfo | undefined;
  nearOffers: Offers;
  isOffersDataLoading: boolean;
  hasError: boolean;
};

const initialState: InitialState = {
  offers: [],
  offerInfo: undefined,
  nearOffers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOfferInfo: (state, action: PayloadAction<OfferInfo>) => {
      state.offerInfo = action.payload;
    },
    setFavoriteOffer: (state, action: PayloadAction<OfferInfo>) => {
      state.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
    },
  },
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
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  },
});

export const {setOfferInfo, setFavoriteOffer} = offers.actions;
