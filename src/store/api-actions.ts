import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { AuthData, Comment, CommentData, Comments, FavoriteData, OfferInfo, Offers, UserData } from '../types/types';
import { dropToken, saveToken } from '../services/token';
import { APIRoute } from './const';

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

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
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

export const fetchComments = createAsyncThunk<Comments, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, {extra: api}) => {
    if (offerId) {
      const {data} = await api.get<Comments>(APIRoute.Comments + offerId);
      return data;
    }
    return [];
  },
);

export const postComment = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    await api.post<Comment>(APIRoute.Comments + offerId, {comment, rating});
    dispatch(fetchComments(offerId));
  },
);

export const postFavorite = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postFavorite',
  async ({offerId, isFavorite}, {dispatch, extra: api}) => {
    await api.post<OfferInfo>(`${APIRoute.Favorite }/${ offerId }/${ Number(isFavorite)}`);
    dispatch(fetchOffersAction());
  },
);

export const fetchFavorites = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorite);
    return data;
  },
);
