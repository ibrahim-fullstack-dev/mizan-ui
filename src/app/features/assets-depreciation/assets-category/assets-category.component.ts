// src/app/features/assets-depreciation/assets-category/assets-category.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IAssetCategory } from './assets-category.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './assets-category.constants';

@Component({
  selector: 'app-assets-category',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
  // UI STATE
  // =====================================================

  protected readonly searchQuery = signal('');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;
  protected readonly headerButtons = HEADER_BUTTONS;

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawAssetCategories(),
    totalItems: this.rawAssetCategories().length,
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

  protected onTableAction(event: TableActionEvent<IAssetCategory>): void {
    switch (event.action) {
      case 'view':
        console.log('View asset category:', event.id);
        break;

      case 'edit':
        console.log('Edit asset category:', event.id);
        break;

      case 'delete':
        this.deleteAssetCategory(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  protected onTableSelectionChange(selectedIds: IAssetCategory['id'][]): void {
    console.log('Selected asset category IDs:', selectedIds);
  }

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // ADD FORM
  // =====================================================

  private openAddForm(): void {
    // Connect to the add-form flow.
    console.log('Open Add Asset Category form');
  }

  // =====================================================
  // OTHER ACTIONS
  // =====================================================

  private deleteAssetCategory(id: IAssetCategory['id']): void {
    this.rawAssetCategories.update((categories) =>
      categories.filter((category) => category.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawAssetCategories.set([]);
  }
}
