import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePaymentsComponent } from './sale-payments.component';

describe('SalePaymentsComponent', () => {
  let component: SalePaymentsComponent;
  let fixture: ComponentFixture<SalePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalePaymentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SalePaymentsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
