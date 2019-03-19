import { TestBed } from '@angular/core/testing';

import {describe, expect} from '@angular/core/testing/src/testing_internal';
import {OrdersServiceMimics} from './orders.service';

describe('OrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersServiceMimics = TestBed.get(OrdersServiceMimics);
    expect(service).toBeTruthy();
  });
});
