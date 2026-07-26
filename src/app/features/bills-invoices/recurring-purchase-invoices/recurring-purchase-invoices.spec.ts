import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringPurchaseInvoicesComponent } from './recurring-purchase-invoices.component';

describe('RecurringPurchaseInvoices', () => {
  let component: RecurringPurchaseInvoicesComponent;
  let fixture: ComponentFixture<RecurringPurchaseInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecurringPurchaseInvoicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecurringPurchaseInvoicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
