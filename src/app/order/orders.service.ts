import {Injectable} from '@angular/core';
import {OrdersService} from './orders_service';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceMimics implements OrdersService {
  orders: string[] = ['espresso', 'coffee black', 'hafux'];

  constructor() {
  }

  addOrder(order): boolean {
    this.orders.push(order);
    return true;
  }

  getOrders(): any {
    return this.orders;
  }

}
