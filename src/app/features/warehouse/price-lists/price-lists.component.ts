// src/app/features/warehouse/price-lists/price-lists.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPriceList } from './price-lists.types';

// Constants
import { DATA_PAGE_CONFIG } from './price-lists.constants';

@Component({
  selector: 'app-price-lists',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './price-lists.component.html',
  styleUrl: './price-lists.component.css',
})
export class PriceListsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPriceLists = signal<IPriceList[]>([
    {
      id: 1,
      name: 'Price 1',
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Price 2',
      description: 'Description 2',
    },
    {
      id: 3,
      name: 'Price 3',
      description: 'Description 3',
    },
    {
      id: 4,
      name: 'Price 4',
      description: 'Description 4',
    },
    {
      id: 5,
      name: 'Price 5',
      description: 'Description 5',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IPriceList>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPriceLists(),

      totalItems: this.rawPriceLists().length,
    },
  }));
}
