// src/app/features/bills-invoices/purchase-returns/purchase-returns.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPurchaseReturn } from './purchase-returns.types';

// Constants
import { DATA_PAGE_CONFIG } from './purchase-returns.constants';

@Component({
  selector: 'app-purchase-returns',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './purchase-returns.component.html',
  styleUrl: './purchase-returns.component.css',
})
export class PurchaseReturnsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchaseReturns = signal<IPurchaseReturn[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      purchaseInvoiceNumber: '12345678',
      supplierName: 'Ahmad Omar',
      branchName: 'Branch 1',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      purchaseInvoiceNumber: '12345679',
      supplierName: 'Sara Khalid',
      branchName: 'Branch 2',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      purchaseInvoiceNumber: '12345680',
      supplierName: 'Fahad Suleiman',
      branchName: 'Branch 3',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      purchaseInvoiceNumber: '12345681',
      supplierName: 'Reem Ali',
      branchName: 'Branch 4',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      purchaseInvoiceNumber: '12345682',
      supplierName: 'Yousef Hassan',
      branchName: 'Branch 5',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IPurchaseReturn>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPurchaseReturns(),

      totalItems: this.rawPurchaseReturns().length,
    },
  }));
}
