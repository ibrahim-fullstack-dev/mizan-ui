import { Component, input } from '@angular/core';
import { BarChartModule } from '@swimlane/ngx-charts'; // العودة لموديول الأعمدة
import { ChartGroupItem } from './analytics.columns.chart.types';

@Component({
  selector: 'app-columns-chart', // يمكنك تغييره إلى app-bar-chart لاحقاً
  standalone: true,
  imports: [BarChartModule],
  templateUrl: './analytics.columns.chart.component.html',
  styleUrl: './analytics.columns.chart.component.css',
})
export class ColumnsChartComponent {
  data = input<ChartGroupItem[]>([]);
  showXAxis = input<boolean>(true);
  showYAxis = input<boolean>(true);
  gradient = input<boolean>(false);
  showGridLines = input<boolean>(true);
  animations = input<boolean>(true);

  colorScheme: any = {
    domain: ['#3b82f6', '#10b981'], // الأزرق للفواتير والأخضر للمدفوعات
  };

  yAxisTickFormatting = (val: any): string => {
    if (val >= 1000) {
      return (val / 1000).toLocaleString() + 'k';
    }
    return val.toLocaleString();
  };
}
