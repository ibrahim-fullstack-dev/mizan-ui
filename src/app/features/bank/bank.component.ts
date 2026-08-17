import { Component, computed, signal } from '@angular/core';

// Shared Components
import { ColumnsChartComponent } from '@components/analytics-columns-chart/analytics.columns.chart.component';
import { TableComponent } from '@components/table/table.component';

// Types
import { ChartGroupItem } from '@components/analytics-columns-chart/analytics.columns.chart.types';
import { TableConfig, TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IBank } from './bank.types';

// Constants
import { BANK_TABLE_COLUMNS, BANK_TABLE_ACTIONS } from './bank.constants';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [ColumnsChartComponent, TableComponent],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css',
})
export class BankComponent {
  // =====================================================
  // BANK DATA
  // =====================================================

  protected readonly banks = signal<IBank[]>([
    {
      id: 1,
      accountName: 'Account 1',
      accountType: 'Current',
      accountNumber: '12345678',
      balance: 100,
    },
  ]);

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed<TableConfig<IBank>>(() => ({
    data: this.banks(),

    columns: BANK_TABLE_COLUMNS,

    actions: BANK_TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No bank accounts found.',

    totalItems: this.banks().length,

    pageSize: 10,

    currentPage: 1,

    trackByProperty: 'id',
  }));

  // =====================================================
  // ANALYTICS DATA
  // =====================================================

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

  // =====================================================
  // CHART OPTIONS
  // =====================================================

  protected readonly isAnimated = signal(true);
  protected readonly showGrid = signal(true);

  // =====================================================
  // TABLE EVENTS
  // =====================================================

  protected onRowsSelected(selectedBankIds: IBank['id'][]): void {
    console.log('Selected bank IDs:', selectedBankIds);
  }

  protected onTableAction(event: TableActionEvent<IBank>): void {
    switch (event.action) {
      case 'view':
        console.log('View bank:', event.id);
        break;

      case 'edit':
        console.log('Edit bank:', event.id);
        break;

      case 'delete':
        console.log('Delete bank:', event.id);
        break;

      default:
        console.warn(`Unhandled action: ${event.id}`);
    }
  }

  protected onPageChange(event: TablePageEvent): void {
    console.log('Page:', event.page);
    console.log('Page size:', event.pageSize);
  }
}
