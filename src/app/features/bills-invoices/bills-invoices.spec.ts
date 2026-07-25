import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsInvoicesComponent } from './bills-invoices.component';

describe('BillsInvoices', () => {
  let component: BillsInvoicesComponent;
  let fixture: ComponentFixture<BillsInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillsInvoicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillsInvoicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
