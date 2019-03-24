import {Order} from './order';

export abstract class OrdersService {
  abstract addOrder(order): boolean;

  abstract getOrders(): Order[];

  abstract removeOrder(id: number): boolean;
}
