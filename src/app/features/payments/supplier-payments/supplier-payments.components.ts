// src/app/features/payments/supplier-payments/supplier-payments.components.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ISupplierPayment } from './supplier-payments.types';

// Constants
import { DATA_PAGE_CONFIG } from './supplier-payments.constants';

@Component({
  selector: 'app-supplier-payments',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './supplier-payments.component.html',
  styleUrl: './supplier-payments.component.css',
})
export class SupplierPaymentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSupplierPayments = signal<ISupplierPayment[]>([
    {
      id: 1,
      payNumber: '1234567890',
      supplierName: 'Supplier 1',
      paymentMethod: 'Payment Method 1',
      amount: 100,
      date: '2023-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ISupplierPayment>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawSupplierPayments(),

      totalItems: this.rawSupplierPayments().length,
    },
  }));
}
