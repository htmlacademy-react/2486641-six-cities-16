import { offers } from './offers';

describe('Favorites Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      offerInfo: undefined,
      nearOffers: [],
      isOffersDataLoading: true,
      hasError: true,
    };

    const result = offers.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
