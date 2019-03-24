import {Injectable} from '@angular/core';
import {OrdersService} from './orders-service';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceMimics extends OrdersService {
  /*orders: string[] = ['espresso', 'coffee black', 'makiato'];
    constructor() {
      super();
    }*/

  order1 = new Order('Americano', 'user@mail.ru', 'tall',
    'Vanila', 55);
  order2 = new Order('Cappuccino', 'user@gmail.com', 'small',
    'Mocha', 70);
  order3 = new Order('Latte', 'post@mail.ru', 'tall',
    'None', 60);
  orders: string[] = [this.order1, this.order2, this.order3];

  addOrder(order): boolean {
    this.orders.push(order);
    return true;
  }

  getOrders(): Order[] {
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
