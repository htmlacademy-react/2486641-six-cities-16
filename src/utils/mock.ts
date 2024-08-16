import { Cities } from '../store/city/const';
import { Offer } from '../types/types';
import { address, commerce, datatype, image, name } from 'faker';
import { getRandomInt } from './utils';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { createAPI } from '../services/api';

const getRandomCity = () => Object.values(Cities)[getRandomInt(6)];

const makeFakeLocation = () => ({
  'latitude': Number(address.latitude()),
  'longitude': Number(address.longitude()),
  'zoom': datatype.number()
});

export const makeFakeOffer = (): Offer => ({
  'id': datatype.uuid(),
  'title': name.title(),
  'type': 'apartment',
  'price': Number(commerce.price()),
  'city': getRandomCity(),
  'location': makeFakeLocation(),
  'isFavorite': datatype.boolean(),
  'isPremium': datatype.boolean(),
  'rating': datatype.number({min: 1, max: 5}),
  'previewImage': image.imageUrl()
});

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
