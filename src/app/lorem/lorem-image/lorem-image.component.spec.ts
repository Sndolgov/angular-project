import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremImageComponent } from './lorem-image.component';

describe('LoremImageComponent', () => {
  let component: LoremImageComponent;
  let fixture: ComponentFixture<LoremImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
