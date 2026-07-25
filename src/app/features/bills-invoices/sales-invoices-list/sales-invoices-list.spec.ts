import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoicesListComponent } from './sales-invoices-list.component';

describe('SalesInvoicesList', () => {
  let component: SalesInvoicesListComponent;
  let fixture: ComponentFixture<SalesInvoicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesInvoicesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesInvoicesListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
