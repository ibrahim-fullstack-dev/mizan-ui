import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlansComponent } from './pricing-plans.component';

describe('PricingPlansComponent', () => {
  let component: PricingPlansComponent;
  let fixture: ComponentFixture<PricingPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPlansComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingPlansComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
