import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsChartComponent } from './analytics.columns.chart.component';

describe('InvoicesPaymentsChart', () => {
  let component: ColumnsChartComponent;
  let fixture: ComponentFixture<ColumnsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnsChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColumnsChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
