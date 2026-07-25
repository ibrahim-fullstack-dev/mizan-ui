import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringSalesInvoicesComponent } from './recurring-sales-invoices.component';

describe('RecurringSalesInvoices', () => {
  let component: RecurringSalesInvoicesComponent;
  let fixture: ComponentFixture<RecurringSalesInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecurringSalesInvoicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecurringSalesInvoicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
