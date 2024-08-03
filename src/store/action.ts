import { createAction } from '@reduxjs/toolkit';
import { City, Offers } from '../types/types';
import { Sort } from '../const';

export const changeCity = createAction<{city: City}>('city/change');

export const setSort = createAction<{sort: Sort}>('sort/set');

export const loadOffers = createAction<Offers>('data/loadOffers');
