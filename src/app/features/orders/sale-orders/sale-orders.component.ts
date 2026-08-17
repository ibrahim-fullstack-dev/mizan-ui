// src/app/features/orders/sale-orders/sale-orders.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ISaleOrder } from './sale-orders.types';

// Constants
import { DATA_PAGE_CONFIG } from './sale-orders.constants';

@Component({
  selector: 'app-sale-orders',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './sale-orders.component.html',
  styleUrl: './sale-orders.component.css',
})
export class SaleOrdersComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSaleOrders = signal<ISaleOrder[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      clientName: 'Ahmad Omar',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      clientName: 'Sara Khalid',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      clientName: 'Fahad Suleiman',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      clientName: 'Reem Ali',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      clientName: 'Yousef Hassan',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ISaleOrder>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawSaleOrders(),

      totalItems: this.rawSaleOrders().length,
    },
  }));
}
