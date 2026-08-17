// src/app/features/warehouse/categories/categories.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ICategory } from './categories.types';

// Constants
import { DATA_PAGE_CONFIG } from './categories.constants';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesSettingsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCategories = signal<ICategory[]>([
    {
      id: 1,
      categoryName: 'Category 1',
      code: 1,
      parentCategory: 1,
      description: 'Description 1',
    },
    {
      id: 2,
      categoryName: 'Category 2',
      code: 2,
      parentCategory: 2,
      description: 'Description 2',
    },
    {
      id: 3,
      categoryName: 'Category 3',
      code: 3,
      parentCategory: 3,
      description: 'Description 3',
    },
    {
      id: 4,
      categoryName: 'Category 4',
      code: 4,
      parentCategory: 4,
      description: 'Description 4',
    },
    {
      id: 5,
      categoryName: 'Category 5',
      code: 5,
      parentCategory: 5,
      description: 'Description 5',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ICategory>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawCategories(),

      totalItems: this.rawCategories().length,
    },
  }));
}
