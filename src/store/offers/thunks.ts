import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { FavoriteData, OfferInfo, Offers } from '../../types/types';
import { APIRoute } from '../const';
import { addFavorite, deleteFavorite, setFavoriteOffer, setOfferInfo } from './offers';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const getOfferAction = createAsyncThunk<OfferInfo, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferInfo>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<Offers, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (offerId, {extra: api}) => {
    if (offerId) {
      const {data} = await api.get<Offers>(APIRoute.NearOffers.replace('{offerId}', offerId));
      return data;
    }
    return [];
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

export const postFavoriteAction = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postFavoriteAction',
  async ({offerId, isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<OfferInfo>(`${APIRoute.Favorite }/${offerId}/${Number(isFavorite)}`);
    dispatch(setOfferInfo(data));
    dispatch(setFavoriteOffer(data));
    if (data.isFavorite) {
      dispatch(addFavorite(data));
    } else {
      dispatch(deleteFavorite(data));
    }
  },
);

