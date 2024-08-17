import { Comment, Offer, OfferInfo } from '../types/types';
import { address, commerce, datatype, image, internet, name } from 'faker';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { createAPI } from '../services/api';
import { getRandomCity } from './utils';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

const makeFakeLocation = () => ({
  'latitude': Number(address.latitude()),
  'longitude': Number(address.longitude()),
  'zoom': datatype.number()
});

const makeFakeUser = () => ({
  'name': `${name.firstName() } ${ name.lastName()}`,
  'avatarUrl': internet.avatar(),
  'isPro': datatype.boolean()
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
  'previewImage': image.imageUrl(),
});

export const makeFakeOfferInfo = (): OfferInfo => ({
  ...makeFakeOffer(),
  'description': commerce.productDescription(),
  'bedrooms': datatype.number({max: 5}),
  'goods': [
    'Heating'
  ],
  'host': makeFakeUser(),
  'images': new Array(datatype.number({max: 10})).fill(null).map(() => (
    image.imageUrl()),
  ),
  'maxAdults': datatype.number({max: 5}),
});

export const makeFakeComment = (): Comment => ({
  'id': datatype.uuid(),
  'date': datatype.datetime().toString(),
  'user': makeFakeUser(),
  'comment': commerce.productDescription(),
  'rating': datatype.number({min: 1, max: 5}),
});
