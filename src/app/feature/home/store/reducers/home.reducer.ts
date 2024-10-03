import { ISilverPrice } from '../../models/silver-price-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { HomeAction } from '../actions/home.action';

export interface HomeState {
  silverPrice?: ISilverPrice;
  silverPriceLoad?: boolean;
  silverPriceSuccess?: boolean;
  silverPriceError?: HttpErrorResponse;
}

export const initialState: HomeState = {
  silverPrice: undefined,
  silverPriceLoad: undefined,
  silverPriceSuccess: undefined,
  silverPriceError: undefined,
};

export const HomeReducer = createReducer(
  initialState,
  on(HomeAction.loadSilverPrices, (state) => ({
    ...state,
    silverPriceLoad: true,
    silverPriceSuccess: undefined,
  })),
  on(HomeAction.loadSilverPriceSuccess, (state, action) => ({
    ...state,
    silverPriceLoad: false,
    silverPriceSuccess: true,
    silverPrice: action.payload,
  })),
  on(HomeAction.loadSilverPriceFailure, (state, action) => ({
    ...state,
    silverPriceLoad: false,
    silverPriceSuccess: false,
    silverPriceError: action.error,
  })),
);
