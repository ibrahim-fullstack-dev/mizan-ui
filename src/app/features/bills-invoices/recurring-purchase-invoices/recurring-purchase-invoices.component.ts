// src/app/features/bills-invoices/recurring-purchase-invoices/recurring-purchase-invoices.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IRecurringPurchaseInvoice } from './recurring-purchase-invoices.types';

// Constants
import { DATA_PAGE_CONFIG } from './recurring-purchase-invoices.constants';

@Component({
  selector: 'app-recurring-purchase-invoices',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './recurring-purchase-invoices.component.html',
  styleUrl: './recurring-purchase-invoices.component.css',
})
export class RecurringPurchaseInvoicesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawRecurringPurchaseInvoices = signal<IRecurringPurchaseInvoice[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IRecurringPurchaseInvoice>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawRecurringPurchaseInvoices(),

      totalItems: this.rawRecurringPurchaseInvoices().length,
    },
  }));
}
