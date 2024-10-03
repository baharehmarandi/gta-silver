import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ISilverPrice } from '../../models/silver-price-interface';
import { HttpErrorResponse } from '@angular/common/http';

export const HomeAction = createActionGroup({
  source: 'Home',
  events: {
    'load silverPrices': emptyProps(),
    'load silverPrice success': props<{ payload: ISilverPrice }>(),
    'load silverPrice failure': props<{ error: HttpErrorResponse }>(),
  },
});
