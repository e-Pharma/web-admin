import { Injectable } from '@angular/core';
import { ORDERS } from 'app/shared/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrders(){
    return ORDERS;
  }
}
