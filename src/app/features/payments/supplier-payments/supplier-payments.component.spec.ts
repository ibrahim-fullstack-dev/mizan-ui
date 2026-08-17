import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPaymentsComponent } from './supplier-payments.components';

describe('SupplierPaymentsComponent', () => {
  let component: SupplierPaymentsComponent;
  let fixture: ComponentFixture<SupplierPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierPaymentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierPaymentsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
