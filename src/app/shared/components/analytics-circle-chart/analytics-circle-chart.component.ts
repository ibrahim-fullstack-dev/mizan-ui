import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { PieChartModule } from '@swimlane/ngx-charts';
import { Color, ScaleType, LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-analytics-circle-chart',
  imports: [PieChartModule],
  templateUrl: './analytics-circle-chart.component.html',
  styleUrl: './analytics-circle-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalyticsCircleChart {
  title = input.required<string>();
  chartLabels = input.required<string[]>();
  chartDataValues = input.required<number[]>();

  protected readonly legendPosition = LegendPosition.Below;

  protected readonly colorScheme: Color = {
    name: 'raseedScheme',
    selectable: true,
    group: ScaleType.Ordinal, // يحدد نمط توزيع الألوان (ترتيبي)
    domain: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#ebd525'],
  };

  protected readonly chartData = computed(() => {
    const labels = this.chartLabels();
    const values = this.chartDataValues();
    return labels.map((label, index) => ({
      name: label,
      value: values[index] || 0,
    }));
  });
}
