import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Sort } from '../../const';
import { NameSpace } from '../const';

type InitialState = {
  sort: Sort;
}

const initialState: InitialState = {
  sort: Sort.popular,
};

export const sort = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<{sort: Sort}>) => {
      state.sort = action.payload;
    }
  }
});

export const {setSort} = sort.actions;
