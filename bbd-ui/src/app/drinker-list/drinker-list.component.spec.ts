import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerListComponent } from './drinker-list.component';

describe('DrinkerListComponent', () => {
  let component: DrinkerListComponent;
  let fixture: ComponentFixture<DrinkerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
