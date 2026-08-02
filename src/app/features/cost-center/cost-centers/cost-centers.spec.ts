import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCentersComponent } from './cost-centers.component';

describe('CostCenters', () => {
  let component: CostCentersComponent;
  let fixture: ComponentFixture<CostCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostCentersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostCentersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
