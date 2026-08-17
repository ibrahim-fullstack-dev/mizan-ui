// src/app/features/settings/payment-method/payment-method.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPaymentMethod } from './payment-method.types';

// Constants
import { DATA_PAGE_CONFIG } from './payment-method.constants';

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css',
})
export class PaymentMethodComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPaymentMethods = signal<IPaymentMethod[]>([
    {
      id: 1,
      name: 'PayPal',
      way: 'Credit Card',
      accountName: 'Bank',
    },
    {
      id: 2,
      name: 'PayPal',
      way: 'Credit Card',
      accountName: 'Cash',
    },
    {
      id: 3,
      name: 'PayPal',
      way: 'Credit Card',
      accountName: 'bobsmith@example.com',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IPaymentMethod>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPaymentMethods(),

      totalItems: this.rawPaymentMethods().length,
    },
  }));
}
