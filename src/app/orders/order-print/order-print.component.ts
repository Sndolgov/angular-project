import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../order';

@Component({
  selector: 'app-order-print',
  templateUrl: './order-print.component.html',
  styleUrls: ['./order-print.component.css']
})
export class OrderPrintComponent implements OnInit {

  @Input('order')
  order: Order;

  constructor() {
  }

  ngOnInit() {
  }

}
