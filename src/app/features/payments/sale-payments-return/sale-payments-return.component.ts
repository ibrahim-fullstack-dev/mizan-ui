// src/app/features/payments/sale-payments-return/sale-payments-return.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ISalePaymentReturn } from './sale-payments-return.types';

// Constants
import { DATA_PAGE_CONFIG } from './sale-payments-return.constants';

@Component({
  selector: 'app-sale-payments-return',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './sale-payments-return.component.html',
  styleUrl: './sale-payments-return.component.css',
})
export class SalePaymentsReturnComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSalePaymentReturns = signal<ISalePaymentReturn[]>([
    {
      id: 1,
      payNumber: '1234567890',
      returnSaleInvoiceNumber: '1234567890',
      clientName: 'Client 1',
      paymentMethod: 'Payment Method 1',
      amount: 100,
      branch: 'Branch 1',
      date: '2023-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ISalePaymentReturn>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawSalePaymentReturns(),

      totalItems: this.rawSalePaymentReturns().length,
    },
  }));
}
