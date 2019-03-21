import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import {OrdersService} from './orders/ordersservice';
import {OrdersServiceMimics} from './orders/orders-mimics.service';
import { OrdersFormComponent } from './orders/orders-form/orders-form.component';
import { LoremImageComponent } from './lorem/lorem-image/lorem-image.component';
import {FormsModule} from '@angular/forms';
import { SyncInputComponent } from './sync-input/sync-input.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent,
    OrdersFormComponent,
    LoremImageComponent,
    SyncInputComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: OrdersService, useClass: OrdersServiceMimics}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
