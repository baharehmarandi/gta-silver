import { createSelector } from '@ngrx/store';
import { HomeState } from '../reducers/home.reducer';
import { selectSilverPriceFeature } from './home-feature.selector';

export const selectSilverPrice = createSelector(
  selectSilverPriceFeature,
  (state: HomeState) => state.silverPrice,
);

export const selectSilverPriceLoad = createSelector(
  selectSilverPriceFeature,
  (state: HomeState) => state.silverPriceLoad,
);

export const selectSilverPriceSuccess = createSelector(
  selectSilverPriceFeature,
  (state: HomeState) => state.silverPriceSuccess,
);

export const selectSilverPriceError = createSelector(
  selectSilverPriceFeature,
  (state: HomeState) => state.silverPriceError,
);
