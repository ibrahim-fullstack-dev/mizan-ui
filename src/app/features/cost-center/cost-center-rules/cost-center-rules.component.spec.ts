import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCenterRulesComponent } from './cost-center-rules.component';

describe('CostCenterRulesComponent', () => {
  let component: CostCenterRulesComponent;
  let fixture: ComponentFixture<CostCenterRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostCenterRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostCenterRulesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
