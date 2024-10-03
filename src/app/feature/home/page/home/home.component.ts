import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { Store } from '@ngrx/store';
import { HomeAction } from '../../store/actions/home.action';
import { Observable } from 'rxjs';
import { ISilverPrice } from '../../models/silver-price-interface';
import { selectSilverPrice } from '../../store/selectors/home.selector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  private store = inject(Store);

  ngOnInit() {
    this.store.dispatch(HomeAction.loadSilverPrices());
  }
}
