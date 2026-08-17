// src/app/features/bills-invoices/purchase-invoices/purchase-invoices.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPurchaseInvoice } from './purchase-invoices.types';

// Constants
import { DATA_PAGE_CONFIG } from './purchase-invoices.constants';

@Component({
  selector: 'app-purchase-invoices',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './purchase-invoices.component.html',
  styleUrl: './purchase-invoices.component.css',
})
export class PurchaseInvoicesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchaseInvoices = signal<IPurchaseInvoice[]>([
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

  protected readonly dataPageConfig = computed<IDataPageConfig<IPurchaseInvoice>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPurchaseInvoices(),

      totalItems: this.rawPurchaseInvoices().length,
    },
  }));
}
