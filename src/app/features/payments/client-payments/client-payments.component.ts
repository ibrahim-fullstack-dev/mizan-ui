// src/app/features/payments/client-payments/client-payments.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IClientPayment } from './client-payments.types';

// Constants
import { DATA_PAGE_CONFIG } from './client-payments.constants';

@Component({
  selector: 'app-client-payments',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './client-payments.component.html',
  styleUrl: './client-payments.component.css',
})
export class ClientPaymentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawClientPayments = signal<IClientPayment[]>([
    {
      id: 1,
      payNumber: '1234567890',
      clientName: 'Client 1',
      paymentMethod: 'Payment Method 1',
      amount: 100,
      date: '2023-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IClientPayment>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawClientPayments(),

      totalItems: this.rawClientPayments().length,
    },
  }));
}
