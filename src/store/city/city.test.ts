import { getRandomCity } from '../../utils/utils';
import { city } from './city';

describe('City Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {city: getRandomCity()};

    const result = city.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
