import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnsComponent } from './purchase-returns.component';

describe('PurchaseReturnsComponent', () => {
  let component: PurchaseReturnsComponent;
  let fixture: ComponentFixture<PurchaseReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseReturnsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseReturnsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
