import { createSlice } from '@reduxjs/toolkit';
import { Comments } from '../../types/types';
import { NameSpace } from '../const';
import { fetchComments } from './thunks';


type InitialState = {
  comments: Comments;
};
const initialState: InitialState = {
  comments: [],
};

export const comments = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});
