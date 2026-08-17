// src/app/features/bills-invoices/sales-invoices-list/sales-invoices-list.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ISalesInvoice } from './sales-invoices-list.types';

// Constants
import { DATA_PAGE_CONFIG } from './sales-invoices-list.constants';

@Component({
  selector: 'app-sales-invoices',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './sales-invoices-list.component.html',
  styleUrl: './sales-invoices-list.component.css',
})
export class SalesInvoicesListComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSalesInvoices = signal<ISalesInvoice[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      clientName: 'Ahmad Omar',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      clientName: 'Sara Khalid',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      clientName: 'Fahad Suleiman',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      clientName: 'Reem Ali',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      clientName: 'Yousef Hassan',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ISalesInvoice>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawSalesInvoices(),

      totalItems: this.rawSalesInvoices().length,
    },
  }));
}
