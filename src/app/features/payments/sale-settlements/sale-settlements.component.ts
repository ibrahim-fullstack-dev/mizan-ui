// src/app/features/payments/sale-settlements/sale-settlements.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ISaleSettlement } from './sale-settlements.types';

// Constants
import { DATA_PAGE_CONFIG } from './sale-settlements.constants';

@Component({
  selector: 'app-sale-settlements',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './sale-settlements.component.html',
  styleUrl: './sale-settlements.component.css',
})
export class SaleSettlementsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSaleSettlements = signal<ISaleSettlement[]>([
    {
      id: 1,
      saleInvoiceNumber: '1234567890',
      saleDate: '2023-01-01',
      settlementDate: '2023-01-01',
      clientName: 'Client A',
      branch: 'Branch 1',
      salesUser: 'User 1',
      settlementUser: 1,
      settlementAmount: 1000,
      invoiceTotal: 1500,
      totalPaid: 500,
      remaining: 500,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ISaleSettlement>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawSaleSettlements(),

      totalItems: this.rawSaleSettlements().length,
    },
  }));
}
