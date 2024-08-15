import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferInfo, Offers } from '../../types/types';
import { NameSpace } from '../const';
import { fetchFavorites } from './thunks';

type InitialState ={
  favorites: Offers;
};

const initialState: InitialState = {
  favorites: [],
};

export const favorites = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    deleteFavorite: (state, action: PayloadAction<OfferInfo>) => {
      for (let i = 0, len = state.favorites.length; i < len; i++) {
        if (state.favorites[i].id === action.payload.id) {
          state.favorites.splice(i, 1);
          break;
        }
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const { deleteFavorite } = favorites.actions;
