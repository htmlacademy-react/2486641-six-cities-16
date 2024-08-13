import { combineReducers } from '@reduxjs/toolkit';
import { city } from './city/city';
import { offers } from './offers/offers';
import { user } from './user/user';
import { NameSpace } from './const';
import { comments } from './comments/comments';
import { favorites } from './favorites/favorites';

export const rootReducer = combineReducers({
  [NameSpace.City]: city.reducer,
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Comments]: comments.reducer,
  [NameSpace.Favorites]: favorites.reducer,
});
