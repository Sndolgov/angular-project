import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersListComponent } from './order/orders-list/orders-list.component';
import {OrdersService} from './order/orders_service';
import {OrdersServiceMimics} from './order/orders-mimics.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: OrdersService, useClass: OrdersServiceMimics}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
