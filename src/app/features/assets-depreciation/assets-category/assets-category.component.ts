// src/app/features/assets-depreciation/assets-category/assets-category.component.ts

import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IAssetCategory } from './assets-category.types';

// Constants
import { DATA_PAGE_CONFIG } from './assets-category.constants';

@Component({
  selector: 'app-assets-category',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './assets-category.component.html',
  styleUrl: './assets-category.component.css',
})
export class AssetsCategoryComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawAssetCategories = signal<IAssetCategory[]>([
    {
      id: 1,
      name: 'Category 1',
      accountName: 'Account 1',
      depreciationName: 'Depreciation 1',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IAssetCategory>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawAssetCategories(),

      totalItems: this.rawAssetCategories().length,
    },
  }));
}
