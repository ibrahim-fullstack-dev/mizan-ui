import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsBreakdown } from './analytics-breakdown.component';

describe('AnalyticsBreakdown', () => {
  let component: AnalyticsBreakdown;
  let fixture: ComponentFixture<AnalyticsBreakdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsBreakdown],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsBreakdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
