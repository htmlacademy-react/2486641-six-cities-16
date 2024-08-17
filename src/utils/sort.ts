import { Sort } from '../const';
import { Offer } from '../types/types';

export const SortRules = {
  [Sort.Popular]: () => 1,
  [Sort.PriceAsc]: (offerA: Offer, offerB: Offer) => offerA.price - offerB.price,
  [Sort.PriceDesc]: (offerA: Offer, offerB: Offer) => offerB.price - offerA.price,
  [Sort.TopRating]: (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating,
};
