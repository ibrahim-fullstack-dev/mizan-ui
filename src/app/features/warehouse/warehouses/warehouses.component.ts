// src/app/features/warehouse/warehouses/warehouses.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IWarehouse } from './warehouses.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './warehouses.constants';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
  // UI STATE
  // =====================================================

  protected readonly searchQuery = signal('');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;
  protected readonly headerButtons = HEADER_BUTTONS;

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawWarehouses(),
    totalItems: this.rawWarehouses().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add-warehouse':
        this.openAddForm();
        break;

      case 'delete-all':
        this.deleteAll();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IWarehouse>): void {
    switch (event.action) {
      case 'view':
        this.viewWarehouse(event.id);
        break;

      case 'edit':
        this.editWarehouse(event.id);
        break;

      case 'delete':
        this.deleteWarehouse(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IWarehouse['id'][]): void {
    console.log('Selected warehouse IDs:', selectedIds);
  }

  // =====================================================
  // TABLE PAGINATION
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // ACTIONS
  // =====================================================

  private openAddForm(): void {
    console.log('Open Add Warehouse form');
  }

  private viewWarehouse(id: IWarehouse['id']): void {
    console.log('View warehouse:', id);
  }

  private editWarehouse(id: IWarehouse['id']): void {
    console.log('Edit warehouse:', id);
  }

  private deleteWarehouse(id: IWarehouse['id']): void {
    this.rawWarehouses.update((warehouses) =>
      warehouses.filter((warehouse) => warehouse.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawWarehouses.set([]);
  }
}
