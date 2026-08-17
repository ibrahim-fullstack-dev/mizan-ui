// src/app/features/assets-depreciation/assets/assets.component.ts

import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IAsset } from './assets.types';
import { DATA_PAGE_CONFIG } from './assets.constants';

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.css',
})
export class AssetsComponent {
  // =====================================================
  // DEMO DATA
  // =====================================================

  private readonly rawAssets = signal<IAsset[]>([
    {
      id: 1,
      name: 'Asset 1',
      branch: 'Branch 1',
      assetCategory: 'Category 1',
      ledgerValue: 1000,
      purchaseValue: 1200,
    },
  ]);

  // =====================================================
  // PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IAsset>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawAssets(),

      totalItems: this.rawAssets().length,
    },
  }));
}
