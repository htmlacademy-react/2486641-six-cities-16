import { createSlice } from '@reduxjs/toolkit';
import { Comments } from '../../types/types';
import { NameSpace } from '../const';
import { fetchCommentsAction, postCommentAction } from './thunks';


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
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isPostingComment = true;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isPostingComment = false;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isPostingComment = false;
      });
  },
});
