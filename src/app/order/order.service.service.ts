import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from './IOrder';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderService {


  API_URL: string = environment.apiURL; 

  constructor(private readonly httpClient: HttpClient) { }

  ordenar(order: IOrder): Observable<IOrder>{
    return this.httpClient.post<IOrder>(`${this.API_URL}/order`, order);
  }

}
