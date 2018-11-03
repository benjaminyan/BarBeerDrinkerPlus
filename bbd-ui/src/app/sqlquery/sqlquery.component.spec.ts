import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SQLQueryComponent } from './sqlquery.component';

describe('SQLQueryComponent', () => {
  let component: SQLQueryComponent;
  let fixture: ComponentFixture<SQLQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SQLQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SQLQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
