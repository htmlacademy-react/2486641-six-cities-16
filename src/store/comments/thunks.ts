import { createAsyncThunk } from '@reduxjs/toolkit';
import { CommentData, Comments } from '../../types/types';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

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
  'data/postComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    await api.post<Comment>(APIRoute.Comments + offerId, {comment, rating});
    dispatch(fetchComments(offerId));
  },
);
