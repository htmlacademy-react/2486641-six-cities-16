import { combineReducers } from '@reduxjs/toolkit';
import { city } from './city/city';
import { dataProcess } from './data-process/data-process';
import { sort } from './sort/sort';
import { userProcess } from './user-process/user-process';
import { NameSpace } from './const';

export const rootReducer = combineReducers({
  [NameSpace.City]: city.reducer,
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Sort]: sort.reducer,
  [NameSpace.User]: userProcess.reducer,
});
