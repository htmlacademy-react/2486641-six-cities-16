import { State } from '../../types/state';
import { City } from '../../types/types';
import { NameSpace } from '../const';

export const getCity = (state: State): City => state[NameSpace.City].city;
