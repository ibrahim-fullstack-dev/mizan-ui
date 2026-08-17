// src/app/features/warehouse/brands/brands.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IBrand } from './brands.types';

// Constants
import { DATA_PAGE_CONFIG } from './brands.constants';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawBrands = signal<IBrand[]>([
    {
      id: 1,
      name: 'Brand 1',
      description: 'Description 1',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IBrand>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawBrands(),

      totalItems: this.rawBrands().length,
    },
  }));
}
