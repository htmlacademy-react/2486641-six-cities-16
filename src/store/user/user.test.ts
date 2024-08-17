import { AuthorizationStatus } from '../../const';
import { user } from './user';

describe('User Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: {
        'name': 'Oliver Conner',
        'avatarUrl': 'https://url-to-image/image.png',
        'isPro': false,
        'email': 'Oliver.conner@gmail.com',
        'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
      },
    };

    const result = user.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
});
