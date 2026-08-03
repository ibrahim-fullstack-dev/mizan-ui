import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterAllocationsComponent } from './cost-center-allocations.component';

describe('CostCenterAllocationsComponent', () => {
  let component: CostCenterAllocationsComponent;
  let fixture: ComponentFixture<CostCenterAllocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostCenterAllocationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostCenterAllocationsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
