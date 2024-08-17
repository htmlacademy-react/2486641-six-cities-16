import { State } from '../../types/state';
import { OfferInfo, Offers } from '../../types/types';
import { NameSpace } from '../const';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;
export const getNearOffers = (state: State): Offers => state[NameSpace.Offers].nearOffers;
export const getOffersInfo = (state: State): OfferInfo | undefined => state[NameSpace.Offers].offerInfo;
export const getFavorites = (state: State): Offers => state[NameSpace.Offers].favorites;
