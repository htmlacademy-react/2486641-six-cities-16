import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Comments, OfferInfo, Offers } from './types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type DataProcess = {
  offers: Offers;
  offerInfo: OfferInfo | undefined;
  nearOffers: Offers;
  comments: Comments;
  isOffersDataLoading: boolean;
};
