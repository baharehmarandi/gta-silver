import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeService } from '../../services/home.service';
import { HomeAction } from '../actions/home.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { IApiResponse } from '../../../../shared/models/api-response-list.interface';
import { ISilverPrice } from '../../models/silver-price-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class HomeEffect {
  private actions$ = inject(Actions);
  constructor(private homeService: HomeService) {}

  loadSilverPrice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeAction.loadSilverPrices),
      mergeMap(() =>
        this.homeService.getSilverPrice().pipe(
          map((response: IApiResponse<ISilverPrice>) =>
            HomeAction.loadSilverPriceSuccess({
              payload: response.data!,
            }),
          ),
          catchError((error: HttpErrorResponse) =>
            of(HomeAction.loadSilverPriceFailure(error)),
          ),
        ),
      ),
      catchError((error: HttpErrorResponse) =>
        of(HomeAction.loadSilverPriceFailure(error)),
      ),
    );
  });
}
