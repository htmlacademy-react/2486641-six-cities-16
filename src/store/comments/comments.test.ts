import { makeFakeComment } from '../../utils/mock';
import { comments } from './comments';

describe('Comments Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      comments: [makeFakeComment()],
      isPostingComment: true
    };

    const result = comments.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
