// src/app/features/settings/currency/currency.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ICurrency } from './currency.types';

// Constants
import { DATA_PAGE_CONFIG } from './currency.constants';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCurrencies = signal<ICurrency[]>([
    {
      id: 1,
      name: 'USD',
      ISO: 'USD',
      symbol: '$',
      exchangeRate: 1,
    },
    {
      id: 2,
      name: 'EUR',
      ISO: 'EUR',
      symbol: '€',
      exchangeRate: 0.9,
    },
    {
      id: 3,
      name: 'GBP',
      ISO: 'GBP',
      symbol: '£',
      exchangeRate: 0.8,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ICurrency>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawCurrencies(),

      totalItems: this.rawCurrencies().length,
    },
  }));
}
