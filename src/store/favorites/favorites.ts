import { createSlice } from '@reduxjs/toolkit';
import { Offers } from '../../types/types';
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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});
