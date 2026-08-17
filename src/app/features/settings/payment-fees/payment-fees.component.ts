// src/app/features/settings/payment-fees/payment-fees.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPaymentFee } from './payment-fees.types';

// Constants
import { DATA_PAGE_CONFIG } from './payment-fees.constants';

@Component({
  selector: 'app-payment-fees',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './payment-fees.component.html',
  styleUrl: './payment-fees.component.css',
})
export class PaymentFeesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPaymentFees = signal<IPaymentFee[]>([
    {
      id: 1,
      name: 'PayPal',
      expenseCategory: 'Food',
      amount: 100,
    },
    {
      id: 2,
      name: 'PayPal',
      expenseCategory: 'Food',
      amount: 100,
    },
    {
      id: 3,
      name: 'PayPal',
      expenseCategory: 'Food',
      amount: 100,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IPaymentFee>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPaymentFees(),

      totalItems: this.rawPaymentFees().length,
    },
  }));
}
