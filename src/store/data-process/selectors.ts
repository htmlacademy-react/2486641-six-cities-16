import { State } from '../../types/state';
import { Comments, OfferInfo, Offers } from '../../types/types';
import { NameSpace } from '../const';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;
export const getNearOffers = (state: State): Offers => state[NameSpace.Data].nearOffers;
export const getOffersInfo = (state: State): OfferInfo | undefined => state[NameSpace.Data].offerInfo;
export const getComments = (state: State): Comments => state[NameSpace.Data].comments;
export const getFavorites = (state: State): Offers => state[NameSpace.Data].favoriteOffers;
