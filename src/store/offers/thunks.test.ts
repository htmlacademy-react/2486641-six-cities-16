import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { APIRoute } from '../const';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { AppThunkDispatch, extractActionsTypes, makeFakeOffer, makeFakeOfferInfo } from '../../utils/mock';
import { fetchNearOffersAction, fetchOffersAction, getOfferAction } from './thunks';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      OFFERS: {
        offers: [],
        offerInfo: undefined
      }
    });
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async() => {
      const mockOffers = [makeFakeOffer()];
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(mockOffers);
    });

    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected", when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);

    });
  });

  describe('getOfferAction', () => {
    it('should dispatch "getOfferAction.pending", "getOfferAction.fulfilled", when server response 200', async() => {
      const mockOfferInfo = makeFakeOfferInfo();
      mockAxiosAdapter.onGet(`${APIRoute.Offers }/${ mockOfferInfo.id}`).reply(200, mockOfferInfo);

      await store.dispatch(getOfferAction(mockOfferInfo.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const getOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof getOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        getOfferAction.pending.type,
        getOfferAction.fulfilled.type,
      ]);

      expect(getOfferActionFulfilled.payload).toEqual(mockOfferInfo);
    });

    it('should dispatch "getOfferAction.pending", "getOfferAction.rejected", when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, undefined);

      await store.dispatch(getOfferAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        getOfferAction.pending.type,
        getOfferAction.rejected.type,
      ]);

    });
  });

  describe('fetchNearOffersAction', () => {
    it('should dispatch "fetchNearOffersAction.pending", "fetchNearOffersAction.fulfilled", when server response 200', async() => {
      const mockNearOffers = [makeFakeOffer()];
      mockAxiosAdapter.onGet(APIRoute.NearOffers.replace('{offerId}', 'offerId')).reply(200, mockNearOffers);

      await store.dispatch(fetchNearOffersAction('offerId'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.fulfilled.type,
      ]);

      expect(fetchNearOffersActionFulfilled.payload).toEqual(mockNearOffers);
    });

    //   it('should dispatch "fetchNearOffersAction.pending", "fetchNearOffersAction.rejected", when server response 400', async() => {
    //     mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

    //     await store.dispatch(fetchNearOffersAction());

    //     const emittedActions = store.getActions();
    //     const extractedActionsTypes = extractActionsTypes(emittedActions);

    //     expect(extractedActionsTypes).toEqual([
    //       fetchNearOffersAction.pending.type,
    //       fetchNearOffersAction.rejected.type,
    //     ]);

  //   });
  });

});
