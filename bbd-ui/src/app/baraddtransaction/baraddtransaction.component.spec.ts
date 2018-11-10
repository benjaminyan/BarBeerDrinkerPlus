import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAddTransactionComponent } from './baraddtransaction.component';

describe('BarAddTransactionComponent', () => {
  let component: BarAddTransactionComponent;
  let fixture: ComponentFixture<BarAddTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarAddTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarAddTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
