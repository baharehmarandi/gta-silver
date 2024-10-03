import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../../shared/models/api-response-list.interface';
import { ISilverPrice } from '../models/silver-price-interface';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl } from '../../../shared/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getSilverPrice(): Observable<IApiResponse<ISilverPrice>> {
    return this.http.get<IApiResponse<ISilverPrice>>(
      `${apiBaseUrl}/silverPrice`,
    );
  }
}
