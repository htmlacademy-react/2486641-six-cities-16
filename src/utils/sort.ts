import { Sort } from '../const';
import { Offer } from '../types/types';

export const SortRules = {
  [Sort.popular]: () => 1,
  [Sort.priceAsc]: (offerA: Offer, offerB: Offer) => offerA.price - offerB.price,
  [Sort.priceDesc]: (offerA: Offer, offerB: Offer) => offerB.price - offerA.price,
  [Sort.topRating]: (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating,
};
