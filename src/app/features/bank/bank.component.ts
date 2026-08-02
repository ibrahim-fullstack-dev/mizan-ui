import { Component, signal } from '@angular/core';
import { ColumnsChartComponent } from '../../shared/components/analytics-columns-chart/analytics.columns.chart.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { ChartGroupItem } from '../../shared/components/analytics-columns-chart/analytics.columns.chart.types';
import { IBank } from './bank.types';
import { BANK_TABLE_COLUMNS, ACCTIONS_BANK_TABLE_COLUMNS } from './bank.constant';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ColumnsChartComponent, TableComponent],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css',
})
export class BankComponent {
  protected readonly bankTableColumns = BANK_TABLE_COLUMNS;
  protected readonly acctionsBankTableColumns = ACCTIONS_BANK_TABLE_COLUMNS;
  protected readonly alerts = signal<IBank[]>([
    {
      id: 1,
      accountName: 'Account 1',
      accountType: 'Current',
      accountNumber: '12345678',
      balance: 100,
    },
  ]);

  protected readonly analyticsData = signal<ChartGroupItem[]>([
    {
      name: 'Account 1',
      series: [
        { name: 'Jan', value: 100 },
        { name: 'Feb', value: 200 },
        { name: 'Mar', value: 150 },
        { name: 'Apr', value: 300 },
        { name: 'May', value: 250 },
        { name: 'Jun', value: 400 },
        { name: 'Jul', value: 350 },
        { name: 'Aug', value: 450 },
        { name: 'Sep', value: 500 },
        { name: 'Oct', value: 550 },
        { name: 'Nov', value: 600 },
        { name: 'Dec', value: 650 },
      ],
    },
  ]);

  protected readonly isAnimated = signal<boolean>(true);
  protected readonly showGrid = signal<boolean>(true);
}
