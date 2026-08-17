// src/app/features/manufacturing/productions-invoices/productions-invoices.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IProductionInvoice } from './productions-invoices.types';

// Constants
import { DATA_PAGE_CONFIG } from './productions-invoices.constants';

@Component({
  selector: 'app-productions-invoices',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './productions-invoices.component.html',
  styleUrl: './productions-invoices.component.css',
})
export class ProductionsInvoicesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProductionsInvoices = signal<IProductionInvoice[]>([
    {
      id: 1,
      invoiceNumber: 'INV-0001',
      ProductionProductName: 'Product 1',
      branch: 'Branch 1',
      warehouse: 'Warehouse 1',
      date: '2023-01-01',
      totalPrice: 1000,
    },
    {
      id: 2,
      invoiceNumber: 'INV-0002',
      ProductionProductName: 'Product 2',
      branch: 'Branch 2',
      warehouse: 'Warehouse 2',
      date: '2023-01-02',
      totalPrice: 2000,
    },
    {
      id: 3,
      invoiceNumber: 'INV-0003',
      ProductionProductName: 'Product 3',
      branch: 'Branch 3',
      warehouse: 'Warehouse 3',
      date: '2023-01-03',
      totalPrice: 3000,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IProductionInvoice>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawProductionsInvoices(),

      totalItems: this.rawProductionsInvoices().length,
    },
  }));
}
