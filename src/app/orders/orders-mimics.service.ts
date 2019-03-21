import { Injectable } from '@angular/core';
import {OrdersService} from './ordersservice';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceMimics extends OrdersService {
orders: string[] = ['espresso', 'coffee black', 'makiato'];
  constructor() {
    super();
  }

  addOrder(order): boolean {
    this.orders.push(order);
    return true;
  }

  getOrders(): any {
    return this.orders;
  }

  removeOrder(id: number): boolean {
    if (id < 0 || id >= this.orders.length) {
      return false;
    }
    this.orders.splice(id, 1);
    return true;
  }
}
