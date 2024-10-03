import { createFeatureSelector } from '@ngrx/store';
import { HomeState } from '../reducers/home.reducer';

export const selectSilverPriceFeature =
  createFeatureSelector<HomeState>('home');
