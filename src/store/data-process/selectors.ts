import { State } from '../../types/state';
import { Offers } from '../../types/types';
import { NameSpace } from '../const';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
