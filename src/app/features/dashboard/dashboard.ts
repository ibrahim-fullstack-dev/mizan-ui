import { Component, inject, OnInit, signal } from '@angular/core';
import { MetricCard } from '../../shared/components/metric-card/metric-card.component';
import { ColumnsChartComponent } from '../../shared/components/analytics-columns-chart/analytics.columns.chart.component';
import { UrgentActions } from './components/urgent-actions/urgent-actions';
import { AnalyticsBreakdown } from '../../shared/components/analytics-breakdown/analytics-breakdown.component';
import { AnalyticsCircleChart } from '../../shared/components/analytics-circle-chart/analytics-circle-chart.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { ChartGroupItem } from '../../shared/components/analytics-columns-chart/analytics.columns.chart.types';
import { IAlert, IUnpaidSales } from './dashboard.types';
import { AlERTS_TABLE_COLUMNS, UNPAID_SALES_TABLE_COLUMNS } from './dashboard.constant';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MetricCard,
    ColumnsChartComponent,
    UrgentActions,
    AnalyticsBreakdown,
    AnalyticsCircleChart,
    TableComponent,
    LucideAngularModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  protected readonly alertsTableColumns = AlERTS_TABLE_COLUMNS;
  protected readonly unpaidSalesTableColumns = UNPAID_SALES_TABLE_COLUMNS;
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
    { id: 4, name: 'Reem Ali', SKU: '12345678', Branch: 'Main', date: '2022-01-01', stock: '100' },
    {
      id: 5,
      name: 'Yousef Hassan',
      SKU: '12345678',
      Branch: 'Main',
      date: '2022-01-01',
      stock: '100',
    },
  ]);
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
  protected readonly salesProfitData = [
    {
      name: 'Profit',
      series: [
        { name: 'W1', value: 12 },
        { name: 'W2', value: 19 },
        { name: 'W3', value: 14 },
        { name: 'W4', value: 24 },
      ],
    },
  ];

  protected readonly salesData = [
    {
      name: 'Sales',
      series: [
        { name: 'W1', value: 110 },
        { name: 'W2', value: 95 },
        { name: 'W3', value: 160 },
        { name: 'W4', value: 210 },
      ],
    },
  ];

  protected readonly bankData = [
    {
      name: 'Bank',
      series: [
        { name: 'W1', value: 45 },
        { name: 'W2', value: 60 },
        { name: 'W3', value: 50 },
        { name: 'W4', value: 65 },
      ],
    },
  ];

  protected readonly cashData = [
    {
      name: 'Cash',
      series: [
        { name: 'W1', value: 25 },
        { name: 'W2', value: 38 },
        { name: 'W3', value: 30 },
        { name: 'W4', value: 42 },
      ],
    },
  ];

  // ==========================================
  // 3. البيانات الافتراضية للمخطط الرئيسي (Main Chart Fallback Data)
  // ==========================================
  protected readonly defaultChartData: ChartGroupItem[] = [
    {
      name: 'Jan',
      series: [
        { name: 'Invoices', value: 45000 },
        { name: 'Payments', value: 32000 },
      ],
    },
    {
      name: 'Feb',
      series: [
        { name: 'Invoices', value: 58000 },
        { name: 'Payments', value: 42000 },
      ],
    },
    {
      name: 'Mar',
      series: [
        { name: 'Invoices', value: 72000 },
        { name: 'Payments', value: 52000 },
      ],
    },
    {
      name: 'Apr',
      series: [
        { name: 'Invoices', value: 60000 },
        { name: 'Payments', value: 48000 },
      ],
    },
    {
      name: 'May',
      series: [
        { name: 'Invoices', value: 89000 },
        { name: 'Payments', value: 73000 },
      ],
    },
    {
      name: 'Jun',
      series: [
        { name: 'Invoices', value: 95000 },
        { name: 'Payments', value: 82000 },
      ],
    },
    {
      name: 'Jul',
      series: [
        { name: 'Invoices', value: 105000 },
        { name: 'Payments', value: 92000 },
      ],
    },
    {
      name: 'Aug',
      series: [
        { name: 'Invoices', value: 115000 },
        { name: 'Payments', value: 102000 },
      ],
    },
    {
      name: 'Sep',
      series: [
        { name: 'Invoices', value: 125000 },
        { name: 'Payments', value: 112000 },
      ],
    },
    {
      name: 'Oct',
      series: [
        { name: 'Invoices', value: 135000 },
        { name: 'Payments', value: 121000 },
      ],
    },
    {
      name: 'Nov',
      series: [
        { name: 'Invoices', value: 145000 },
        { name: 'Payments', value: 131000 },
      ],
    },
    {
      name: 'Dec',
      series: [
        { name: 'Invoices', value: 155000 },
        { name: 'Payments', value: 141000 },
      ],
    },
  ];
  // الـ Signal المسؤول عن التفاعل مع الـ HTML (يتم تهيئته بالبيانات الافتراضية لحين اكتمال طلب الـ API)
  protected readonly analyticsData = signal<ChartGroupItem[]>(this.defaultChartData);

  protected readonly isAnimated = signal<boolean>(true);
  protected readonly showGrid = signal<boolean>(true);
}
