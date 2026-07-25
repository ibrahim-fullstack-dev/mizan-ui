import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoicesComponent } from './sales-invoices-list.component';

describe('SalesInvoicesList', () => {
  let component: SalesInvoicesComponent;
  let fixture: ComponentFixture<SalesInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesInvoicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesInvoicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
