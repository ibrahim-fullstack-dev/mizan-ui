import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCircleChart } from './analytics-circle-chart.component';

describe('AnalyticsCircleChart', () => {
  let component: AnalyticsCircleChart;
  let fixture: ComponentFixture<AnalyticsCircleChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsCircleChart],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsCircleChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
