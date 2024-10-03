import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { fa_IR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fa from '@angular/common/locales/fa';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HomeReducer } from './feature/home/store/reducers/home.reducer';
import { HomeEffect } from './feature/home/store/effects/home.effect';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule, NZ_ICONS, NzIconService } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  UserOutline,
  LockOutline,
  SearchOutline,
} from '@ant-design/icons-angular/icons';

registerLocaleData(fa);

const icons = [UserOutline, LockOutline, SearchOutline];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNzI18n(fa_IR),
    importProvidersFrom(
      FormsModule,
      BrowserAnimationsModule,
      NzInputModule,
      NzIconModule,
    ),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore({ home: HomeReducer }),
    provideEffects(HomeEffect),
    { provide: NZ_ICONS, useValue: icons },
  ],
};
