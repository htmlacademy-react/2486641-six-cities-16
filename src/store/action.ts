import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/types';
import { Sort } from '../const';

export const changeCity = createAction<{city: City}>('city/change');

export const setSort = createAction<{sort: Sort}>('sort/set');
