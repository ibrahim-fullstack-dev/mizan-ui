// src/app/features/assets-depreciation/depreciation/depreciation.component.ts

import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IDepreciation } from './depreciation.types';

// Constants
import { DATA_PAGE_CONFIG } from './depreciation.constants';

@Component({
  selector: 'app-assets-depreciation',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './depreciation.component.html',
  styleUrl: './depreciation.component.css',
})
export class DepreciationComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawDepreciations = signal<IDepreciation[]>([
    {
      id: 1,
      reference: 'Reference 1',
      fromDate: '2023-01-01',
      toDate: '2023-01-31',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IDepreciation>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawDepreciations(),

      totalItems: this.rawDepreciations().length,
    },
  }));
}
