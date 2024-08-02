import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/types';

export const changeCity = createAction<{cityName: CityType['name']}>('city/change');
