import { makeFakeOffer } from '../../utils/mock';
import { offers } from './offers';

describe('Favorites Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [makeFakeOffer()],
      offerInfo: undefined,
      nearOffers: [makeFakeOffer()],
      isOffersDataLoading: true,
      hasError: true,
      favorites: [makeFakeOffer()]
    };

    const result = offers.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
