import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { APIRoute } from '../const';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { AppThunkDispatch, extractActionsTypes, makeFakeOffer } from '../../utils/mock';
import { fetchFavoritesAction } from './thunks';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      FAVORITES: {
        favorites: []
      }
    });
  });
  describe('fetchFavoritesAction', () => {
    it('should dispatch "fetchFavoritesAction.pending", "fetchFavoritesAction.fulfilled", when server response 200', async() => {
      const mockOffers = [makeFakeOffer()];
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockOffers);

      await store.dispatch(fetchFavoritesAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoritesActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);

      expect(fetchFavoritesActionFulfilled.payload).toEqual(mockOffers);
    });

    // it('should dispatch "fetchFavoritesAction.pending", "fetchFavoritesAction.rejected", when server response 400', async() => {
    //   mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

    //   await store.dispatch(fetchFavoritesAction());

    //   const emittedActions = store.getActions();
    //   const extractedActionsTypes = extractActionsTypes(emittedActions);

    //   expect(extractedActionsTypes).toEqual([
    //     fetchFavoritesAction.pending.type,
    //     fetchFavoritesAction.rejected.type,
    //   ]);

    // });
  });
});
