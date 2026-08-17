// src/app/features/payments/purchase-payments-return/purchase-payments-return.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPurchasePaymentReturn } from './purchase-payments-return.types';

// Constants
import { DATA_PAGE_CONFIG } from './purchase-payments-return.constants';

@Component({
  selector: 'app-purchase-payments-return',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './purchase-payments-return.component.html',
  styleUrl: './purchase-payments-return.component.css',
})
export class PurchasePaymentsReturnComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchasePaymentReturns = signal<IPurchasePaymentReturn[]>([
    {
      id: 1,
      payNumber: '1234567890',
      returnedPurchaseInvoiceNumber: '1234567890',
      supplierName: 'Supplier 1',
      paymentMethod: 'Payment Method 1',
      amount: 100,
      date: '2023-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IPurchasePaymentReturn>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPurchasePaymentReturns(),

      totalItems: this.rawPurchasePaymentReturns().length,
    },
  }));
}
