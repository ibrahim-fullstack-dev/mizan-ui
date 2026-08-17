// src/app/features/payments/sale-payments/sale-payments.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ISalePayment } from './sale-payments.types';

// Constants
import { DATA_PAGE_CONFIG } from './sale-payments.constants';

@Component({
  selector: 'app-sale-payments',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './sale-payments.component.html',
  styleUrl: './sale-payments.component.css',
})
export class SalePaymentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSalePayments = signal<ISalePayment[]>([
    {
      id: 1,
      payNumber: '1234567890',
      saleInvoiceNumber: '1234567890',
      clientName: 'Client 1',
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

  protected readonly dataPageConfig = computed<IDataPageConfig<ISalePayment>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawSalePayments(),

      totalItems: this.rawSalePayments().length,
    },
  }));
}
