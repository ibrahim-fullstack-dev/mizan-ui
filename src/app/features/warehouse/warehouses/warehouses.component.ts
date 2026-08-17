// src/app/features/warehouse/warehouses/warehouses.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IWarehouse } from './warehouses.types';

// Constants
import { DATA_PAGE_CONFIG } from './warehouses.constants';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.css',
})
export class WarehousesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawWarehouses = signal<IWarehouse[]>([
    {
      id: 1,
      name: 'Warehouse 1',
      branch: 'Branch 1',
      address: 'Address 1',
      productCount: 10,
    },
    {
      id: 2,
      name: 'Warehouse 2',
      branch: 'Branch 2',
      address: 'Address 2',
      productCount: 5,
    },
    {
      id: 3,
      name: 'Warehouse 3',
      branch: 'Branch 3',
      address: 'Address 3',
      productCount: 20,
    },
    {
      id: 4,
      name: 'Warehouse 4',
      branch: 'Branch 4',
      address: 'Address 4',
      productCount: 15,
    },
    {
      id: 5,
      name: 'Warehouse 5',
      branch: 'Branch 5',
      address: 'Address 5',
      productCount: 25,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IWarehouse>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawWarehouses(),

      totalItems: this.rawWarehouses().length,
    },
  }));
}
