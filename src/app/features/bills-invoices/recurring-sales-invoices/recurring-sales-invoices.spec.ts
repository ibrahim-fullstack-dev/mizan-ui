import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringSalesInvoices } from './recurring-sales-invoices';

describe('RecurringSalesInvoices', () => {
  let component: RecurringSalesInvoices;
  let fixture: ComponentFixture<RecurringSalesInvoices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecurringSalesInvoices],
    }).compileComponents();

    fixture = TestBed.createComponent(RecurringSalesInvoices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
