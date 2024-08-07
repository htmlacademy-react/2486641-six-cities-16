import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import { city } from "./city/city";
import { dataProcess } from "./data-process/data-process";
import { sort } from "./sort/sort";
import { userProcess } from "./user-process/user-process";

export const rootReducer = combineReducers({
  [NameSpace.City]: city.reducer,
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Sort]: sort.reducer,
  [NameSpace.User]: userProcess.reducer,
});
