import {Injectable} from '@angular/core';
import {OrdersService} from './orders_service';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceMimics extends OrdersService {
  orders: string[] = ['espresso', 'coffee black', 'hafux'];

  addOrder(order): boolean {
    this.orders.push(order);
    return true;
  }

  getOrders(): any {
    return this.orders;
  }

}
