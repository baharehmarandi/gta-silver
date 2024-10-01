import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./page/home/home.component').then((m) => m.HomeComponent),
  },
] as Routes;
