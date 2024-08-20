import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { APIRoute } from '../const';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { AppThunkDispatch, extractActionsTypes, makeFakeComment } from '../../utils/mock';
import { fetchCommentsAction, postCommentAction } from './thunks';
import { CommentData } from '../../types/types';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      COMMENTS: {
        comments: [],
        isPostingComment: false
      }
    });
  });

  describe('fetchCommentsAction', () => {
    it('should dispatch "fetchCommentsAction.fulfilled", when server response 200', async() => {
      const mockComments = [makeFakeComment()];
      const fakeOfferId = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      mockAxiosAdapter.onGet(APIRoute.Comments + fakeOfferId).reply(200, mockComments);

      await store.dispatch(fetchCommentsAction(fakeOfferId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCommentsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCommentsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);

      expect(fetchCommentsActionFulfilled.payload).toEqual(mockComments);
    });
  });

  describe('postCommentAction', () => {
    it('should dispatch "postCommentAction.pending", "postCommentAction.fulfilled", when server response 200', async() => {
      const fakeOfferId = '6af6f711-c28d-4121-82cd-e0b462a27f00';
      const fakeComment: CommentData = {
        offerId: fakeOfferId,
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 4
      };
      const fakeServerReplay = {
        id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
        date: '2019-05-08T14:13:56.569Z',
        user: {
          name: 'Oliver Conner',
          avatarUrl: 'https://url-to-image/image.png',
          isPro: false
        },
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 4
      };
      mockAxiosAdapter.onPost(APIRoute.Comments + fakeOfferId).reply(200, fakeServerReplay);

      await store.dispatch(postCommentAction(fakeComment));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.fulfilled.type
      ]);
    });
  });

});
