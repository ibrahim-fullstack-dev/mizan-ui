// src/app/features/dashboard/dashboard.component.ts

import { Component, computed, signal } from '@angular/core';

import { ColumnsChartComponent } from '../../shared/components/analytics-columns-chart/analytics.columns.chart.component';
import { ButtonGroupComponent } from '../../shared/components/button-group/button-group.component';
import { AnalyticsBreakdown } from '../../shared/components/analytics-breakdown/analytics-breakdown.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { LucideAngularModule } from 'lucide-angular';

import { ChartGroupItem } from '../../shared/components/analytics-columns-chart/analytics.columns.chart.types';
import { IAnalyticsCardItem } from '../../shared/components/analytics-breakdown/analytics-breakdown.types';

import {
  ALERTS_TABLE_CONFIG,
  UNPAID_SALES_TABLE_CONFIG,
  BUTTON_GROUP,
  ANALYTICS_CARDS,
} from './dashboard.constants';

import { IAlert, IUnpaidSales } from './dashboard.types';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ColumnsChartComponent,
    ButtonGroupComponent,
    AnalyticsBreakdown,
    TableComponent,
    LucideAngularModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // =====================================================
  // DASHBOARD CONFIG
  // =====================================================

  protected readonly buttonGroup = BUTTON_GROUP;

  protected readonly analyticsCards = signal<IAnalyticsCardItem[]>(ANALYTICS_CARDS);

  // =====================================================
  // ALERTS DATA
  // =====================================================

  protected readonly alerts = signal<IAlert[]>([
    {
      id: 1,
      name: 'Ahmad Omar',
      SKU: '12345678',
      Branch: 'Main',
      date: '2022-01-01',
      stock: '100',
    },
    {
      id: 2,
      name: 'Sara Khalid',
      SKU: '12345678',
      Branch: 'Main',
      date: '2022-01-01',
      stock: '100',
    },
    {
      id: 3,
      name: 'Fahad Suleiman',
      SKU: '12345678',
      Branch: 'Main',
      date: '2022-01-01',
      stock: '100',
    },
    {
      id: 4,
      name: 'Reem Ali',
      SKU: '12345678',
      Branch: 'Main',
      date: '2022-01-01',
      stock: '100',
    },
    {
      id: 5,
      name: 'Yousef Hassan',
      SKU: '12345678',
      Branch: 'Main',
      date: '2022-01-01',
      stock: '100',
    },
  ]);

  // =====================================================
  // UNPAID SALES DATA
  // =====================================================

  protected readonly unpaidSales = signal<IUnpaidSales[]>([
    {
      id: 1,
      invoiceNumber: 12345678,
      clientName: 'Ahmad Omar',
      type: 'Sales',
      status: 'Unpaid',
      branch: 'Main',
      warehouse: 'Warehouse 1',
      price: 100,
    },
    {
      id: 2,
      invoiceNumber: 12345678,
      clientName: 'Sara Khalid',
      type: 'Sales',
      status: 'Unpaid',
      branch: 'Main',
      warehouse: 'Warehouse 1',
      price: 100,
    },
    {
      id: 3,
      invoiceNumber: 12345678,
      clientName: 'Fahad Suleiman',
      type: 'Sales',
      status: 'Unpaid',
      branch: 'Main',
      warehouse: 'Warehouse 1',
      price: 100,
    },
    {
      id: 4,
      invoiceNumber: 12345678,
      clientName: 'Reem Ali',
      type: 'Sales',
      status: 'Unpaid',
      branch: 'Main',
      warehouse: 'Warehouse 1',
      price: 100,
    },
    {
      id: 5,
      invoiceNumber: 12345678,
      clientName: 'Yousef Hassan',
      type: 'Sales',
      status: 'Unpaid',
      branch: 'Main',
      warehouse: 'Warehouse 1',
      price: 100,
    },
  ]);

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly alertsTableConfig = computed(() => ({
    ...ALERTS_TABLE_CONFIG,

    data: this.alerts(),

    totalItems: this.alerts().length,
  }));

  protected readonly unpaidSalesTableConfig = computed(() => ({
    ...UNPAID_SALES_TABLE_CONFIG,

    data: this.unpaidSales(),

    totalItems: this.unpaidSales().length,
  }));

  // =====================================================
  // CHART DATA
  // =====================================================

  protected readonly defaultChartData: ChartGroupItem[] = [
    {
      name: 'China',
      series: [
        { value: 5716, name: '2016-09-17T12:06:18.166Z' },
        { value: 5937, name: '2016-09-19T07:17:41.975Z' },
        { value: 2028, name: '2016-09-19T11:34:30.903Z' },
        { value: 5425, name: '2016-09-20T11:49:07.625Z' },
        { value: 5927, name: '2016-09-23T16:03:02.600Z' },
      ],
    },
    {
      name: 'Croatia',
      series: [
        { value: 3075, name: '2016-09-17T12:06:18.166Z' },
        { value: 4318, name: '2016-09-19T07:17:41.975Z' },
        { value: 5625, name: '2016-09-19T11:34:30.903Z' },
        { value: 6450, name: '2016-09-20T11:49:07.625Z' },
        { value: 2511, name: '2016-09-23T16:03:02.600Z' },
      ],
    },
    {
      name: 'Congo',
      series: [
        { value: 2547, name: '2016-09-17T12:06:18.166Z' },
        { value: 6492, name: '2016-09-19T07:17:41.975Z' },
        { value: 2826, name: '2016-09-19T11:34:30.903Z' },
        { value: 6084, name: '2016-09-20T11:49:07.625Z' },
        { value: 3654, name: '2016-09-23T16:03:02.600Z' },
      ],
    },
    {
      name: 'Sao Tome and Principe',
      series: [
        { value: 3707, name: '2016-09-17T12:06:18.166Z' },
        { value: 4350, name: '2016-09-19T07:17:41.975Z' },
        { value: 5399, name: '2016-09-19T11:34:30.903Z' },
        { value: 3052, name: '2016-09-20T11:49:07.625Z' },
        { value: 2470, name: '2016-09-23T16:03:02.600Z' },
      ],
    },
    {
      name: 'Bahamas',
      series: [
        { value: 2708, name: '2016-09-17T12:06:18.166Z' },
        { value: 4023, name: '2016-09-19T07:17:41.975Z' },
        { value: 5766, name: '2016-09-19T11:34:30.903Z' },
        { value: 2767, name: '2016-09-20T11:49:07.625Z' },
        { value: 3543, name: '2016-09-23T16:03:02.600Z' },
      ],
    },
  ];

  protected readonly analyticsData = signal<ChartGroupItem[]>(this.defaultChartData);

  protected readonly isAnimated = signal(true);
  protected readonly showGrid = signal(true);
}
