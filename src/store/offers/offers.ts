import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFavoritesAction, fetchNearOffersAction, fetchOffersAction, getOfferAction } from './thunks.ts';
import { NameSpace } from '../const';
import { OfferInfo, Offers } from '../../types/types';


export type InitialState = {
  offers: Offers;
  offerInfo: OfferInfo | undefined;
  nearOffers: Offers;
  isOffersDataLoading: boolean;
  hasError: boolean;
  favorites: Offers;
};

const initialState: InitialState = {
  offers: [],
  offerInfo: undefined,
  nearOffers: [],
  isOffersDataLoading: false,
  hasError: false,
  favorites: [],
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
    deleteFavorite: (state, action: PayloadAction<OfferInfo>) => {
      for (let i = 0, len = state.favorites.length; i < len; i++) {
        if (state.favorites[i].id === action.payload.id) {
          state.favorites.splice(i, 1);
          break;
        }
      }
    },
    addFavorite: (state, action: PayloadAction<OfferInfo>) => {
      const favoriteOffer = state.offers.find((offer) => offer.id === action.payload.id);
      if (favoriteOffer) {
        state.favorites.push(favoriteOffer);
      }
    }
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
      .addCase(getOfferAction.pending, () => {
        //state.offerInfo = action.payload;
      })
      .addCase(getOfferAction.fulfilled, (state, action) => {
        state.offerInfo = action.payload;
      })
      .addCase(getOfferAction.rejected, (state) => {
        state.offerInfo = undefined;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const {setOfferInfo, setFavoriteOffer, addFavorite, deleteFavorite} = offers.actions;
