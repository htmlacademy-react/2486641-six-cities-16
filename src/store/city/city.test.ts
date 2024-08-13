import { city } from './city';
import { Cities } from './const';

describe('City Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {city: Cities['Amsterdam']};

    const result = city.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
