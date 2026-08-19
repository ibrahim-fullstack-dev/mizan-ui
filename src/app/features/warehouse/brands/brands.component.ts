// src/app/features/warehouse/brands/brands.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IBrand } from './brands.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './brands.constants';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawBrands(),
    totalItems: this.rawBrands().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add':
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

  protected onTableAction(event: TableActionEvent<IBrand>): void {
    switch (event.action) {
      case 'view':
        this.viewBrand(event.id);
        break;

      case 'edit':
        this.editBrand(event.id);
        break;

      case 'delete':
        this.deleteBrand(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IBrand['id'][]): void {
    console.log('Selected brand IDs:', selectedIds);
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
    console.log('Open Add Brand form');
  }

  private viewBrand(id: IBrand['id']): void {
    console.log('View brand:', id);
  }

  private editBrand(id: IBrand['id']): void {
    console.log('Edit brand:', id);
  }

  private deleteBrand(id: IBrand['id']): void {
    this.rawBrands.update((brands) => brands.filter((brand) => brand.id !== id));
  }

  private deleteAll(): void {
    this.rawBrands.set([]);
  }
}
