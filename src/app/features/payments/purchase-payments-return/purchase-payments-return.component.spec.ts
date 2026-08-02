import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePaymentsReturnComponent } from './purchase-payments-return.component';

describe('PurchasePaymentsReturnComponent', () => {
  let component: PurchasePaymentsReturnComponent;
  let fixture: ComponentFixture<PurchasePaymentsReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasePaymentsReturnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchasePaymentsReturnComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
