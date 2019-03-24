import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../orders-service';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent {
private service: OrdersService;
  constructor(service: OrdersService) {
    this.service = service;
  }

onInput(event) {
 this.service.addOrder(event.target.value);
 event.target.value = '';
}

}
