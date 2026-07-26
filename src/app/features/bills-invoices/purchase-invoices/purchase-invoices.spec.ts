import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInvoicesComponent } from './purchase-invoices.component';

describe('PurchaseInvoices', () => {
  let component: PurchaseInvoicesComponent;
  let fixture: ComponentFixture<PurchaseInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseInvoicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseInvoicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
