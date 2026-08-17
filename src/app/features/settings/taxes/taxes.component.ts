// src/app/features/settings/taxes/taxes.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ITax } from './taxes.types';

// Constants
import { DATA_PAGE_CONFIG } from './taxes.constants';

@Component({
  selector: 'app-taxes',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './taxes.component.html',
  styleUrl: './taxes.component.css',
})
export class TaxesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawTaxes = signal<ITax[]>([
    {
      id: 1,
      name: 'VAT',
      rate: 0.1,
      saleAccount: 1,
      purchaseAccount: 2,
    },
    {
      id: 2,
      name: 'GST',
      rate: 0.2,
      saleAccount: 3,
      purchaseAccount: 4,
    },
    {
      id: 3,
      name: 'IRS',
      rate: 0.3,
      saleAccount: 5,
      purchaseAccount: 6,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ITax>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawTaxes(),

      totalItems: this.rawTaxes().length,
    },
  }));
}
