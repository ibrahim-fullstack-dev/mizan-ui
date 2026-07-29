import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsInvoicesComponent } from './productions-invoices.component';

describe('ProductionsInvoicesComponent', () => {
  let component: ProductionsInvoicesComponent;
  let fixture: ComponentFixture<ProductionsInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionsInvoicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductionsInvoicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
