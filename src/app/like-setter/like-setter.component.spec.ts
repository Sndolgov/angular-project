import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeSetterComponent } from './like-setter.component';

describe('LikeSetterComponent', () => {
  let component: LikeSetterComponent;
  let fixture: ComponentFixture<LikeSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
