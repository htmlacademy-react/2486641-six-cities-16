import { createAsyncThunk } from '@reduxjs/toolkit';
import { FavoriteData, OfferInfo, Offers } from '../../types/types';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { setFavoriteOffer, setOfferInfo } from '../offers/offers';
import { deleteFavorite } from './favorites';

export const postFavoriteAction = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postFavoriteAction',
  async ({offerId, isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<OfferInfo>(`${APIRoute.Favorite }/${ offerId }/${ Number(isFavorite)}`);
    dispatch(setOfferInfo(data));
    dispatch(setFavoriteOffer(data));
    if (!data.isFavorite) {
      dispatch(deleteFavorite(data));
    }
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoritesAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorite);
    return data;
  },
);
