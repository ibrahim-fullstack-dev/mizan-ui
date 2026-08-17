// src/app/features/discounts/discounts.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IDiscount } from './discounts.types';

// Constants
import { DATA_PAGE_CONFIG } from './discounts.constants';

@Component({
  selector: 'app-discounts',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.css',
})
export class DiscountsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawDiscounts = signal<IDiscount[]>([
    {
      id: 1,
      name: 'Discount 1',
      discountAmount: 10,
      startAt: '2023-01-01',
      endAt: '2023-12-31',
      isActive: true,
    },
    {
      id: 2,
      name: 'Discount 2',
      discountAmount: 20,
      startAt: '2023-02-01',
      endAt: '2023-11-30',
      isActive: false,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IDiscount>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawDiscounts(),

      totalItems: this.rawDiscounts().length,
    },
  }));
}
