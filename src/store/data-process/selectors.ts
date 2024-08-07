import { NameSpace } from "../../const";
import { State } from "../../types/state";
import { Offers } from "../../types/types";

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
