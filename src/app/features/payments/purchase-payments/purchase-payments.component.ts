// src/app/features/payments/purchase-payments/purchase-payments.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPurchasePayment } from './purchase-payments.types';

// Constants
import { DATA_PAGE_CONFIG } from './purchase-payments.constants';

@Component({
  selector: 'app-purchase-payments',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './purchase-payments.component.html',
  styleUrl: './purchase-payments.component.css',
})
export class PurchasePaymentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchasePayments = signal<IPurchasePayment[]>([
    {
      id: 1,
      payNumber: '1234567890',
      purchaseInvoiceNumber: '1234567890',
      supplierName: 'Supplier 1',
      paymentMethod: 'Payment Method 1',
      amount: 100,
      branch: 'Branch 1',
      date: '2023-01-01',
      note: 'Note 1',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IPurchasePayment>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPurchasePayments(),

      totalItems: this.rawPurchasePayments().length,
    },
  }));
}
