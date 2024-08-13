import { State } from '../../types/state';
import { Offers } from '../../types/types';
import { NameSpace } from '../const';

export const getFavorites = (state: State): Offers => state[NameSpace.Favorites].favorites;
