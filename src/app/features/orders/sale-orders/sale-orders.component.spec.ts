import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrdersComponent } from './sale-orders.component';

describe('SaleOrdersComponent', () => {
  let component: SaleOrdersComponent;
  let fixture: ComponentFixture<SaleOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleOrdersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
