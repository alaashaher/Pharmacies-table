import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaciesTableComponent } from './pharmacies-table.component';

describe('PharmaciesTableComponent', () => {
  let component: PharmaciesTableComponent;
  let fixture: ComponentFixture<PharmaciesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaciesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaciesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
