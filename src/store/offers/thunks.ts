import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { OfferInfo, Offers } from '../../types/types';
import { APIRoute } from '../const';

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
