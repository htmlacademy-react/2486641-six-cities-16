import { createSlice } from '@reduxjs/toolkit';
import { Comments } from '../../types/types';
import { NameSpace } from '../const';
import { fetchComments, postComment } from './thunks';


type InitialState = {
  comments: Comments;
  isPostingComment: boolean;
};
const initialState: InitialState = {
  comments: [],
  isPostingComment: false
};

export const comments = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postComment.pending, (state) => {
        state.isPostingComment = true;
      })
      .addCase(postComment.rejected, (state) => {
        state.isPostingComment = false;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isPostingComment = false;
      });
  },
});
