// src/app/features/warehouse/products-lists/products-lists.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IProductList } from './products-lists.types';

// Constants
import { DATA_PAGE_CONFIG } from './products-lists.constants';

@Component({
  selector: 'app-products-lists',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './products-lists.component.html',
  styleUrl: './products-lists.component.css',
})
export class ProductsListsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProducts = signal<IProductList[]>([
    {
      id: 1,
      name: 'Camera',
      type: 'Camera',
      stock: 10,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 1000,
    },
    {
      id: 2,
      name: 'Bike',
      type: 'Bike',
      stock: 5,
      category: 'Sports',
      sku: '987654321',
      defaultSalePrice: 500,
    },
    {
      id: 3,
      name: 'Phone',
      type: 'Phone',
      stock: 20,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 800,
    },
    {
      id: 4,
      name: 'Laptop',
      type: 'Laptop',
      stock: 15,
      category: 'Electronics',
      sku: '987654321',
      defaultSalePrice: 600,
    },
    {
      id: 5,
      name: 'Monitor',
      type: 'Monitor',
      stock: 25,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 1200,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IProductList>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawProducts(),

      totalItems: this.rawProducts().length,
    },
  }));
}
