import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePaymentsReturnComponent } from './sale-payments-return.component';

describe('SalePaymentsReturnComponent', () => {
  let component: SalePaymentsReturnComponent;
  let fixture: ComponentFixture<SalePaymentsReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalePaymentsReturnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalePaymentsReturnComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
