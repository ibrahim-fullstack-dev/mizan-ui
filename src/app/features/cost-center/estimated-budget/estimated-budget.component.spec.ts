import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedBudgetComponent } from './estimated-budget.component';

describe('EstimatedBudgetComponent', () => {
  let component: EstimatedBudgetComponent;
  let fixture: ComponentFixture<EstimatedBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimatedBudgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EstimatedBudgetComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
