import { Sort } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../const';

export const getSort = (state: State): Sort => state[NameSpace.Sort].sort;
