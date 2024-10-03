import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISilverPrice } from '../../models/silver-price-interface';
import { Observable } from 'rxjs';
import { selectSilverPrice } from '../../store/selectors/home.selector';
import {
  AsyncPipe,
  DecimalPipe,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import {
  NzInputDirective,
  NzInputGroupComponent,
  NzInputModule,
} from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    DecimalPipe,
    NzInputGroupComponent,
    NzInputDirective,
    NgOptimizedImage,
    NzInputModule,
    NzIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  private store = inject(Store);
  silverPrice$: Observable<ISilverPrice | undefined>;
  constructor() {
    this.silverPrice$ = this.store.select(selectSilverPrice);
  }
}
