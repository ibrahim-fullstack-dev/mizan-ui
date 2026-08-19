// src/app/features/assets-depreciation/assets/assets.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IAsset } from './assets.types';

import { DATA_PAGE_CONFIG, HEADER_BUTTONS, SEARCH_INPUT, TABLE_CONFIG } from './assets.constants';

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawAssets(),
    totalItems: this.rawAssets().length,
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

  protected onTableAction(event: TableActionEvent<IAsset>): void {
    switch (event.action) {
      case 'view':
        console.log('View asset:', event.id);
        break;

      case 'edit':
        console.log('Edit asset:', event.id);
        break;

      case 'delete':
        this.deleteAsset(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  protected onTableSelectionChange(selectedIds: IAsset['id'][]): void {
    console.log('Selected asset IDs:', selectedIds);
  }

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // ADD FORM
  // =====================================================

  private openAddForm(): void {
    // Will be connected to the add-form flow.
    console.log('Open Add Asset form');
  }

  // =====================================================
  // OTHER ACTIONS
  // =====================================================

  private deleteAsset(id: IAsset['id']): void {
    this.rawAssets.update((assets) => assets.filter((asset) => asset.id !== id));
  }

  private deleteAll(): void {
    this.rawAssets.set([]);
  }
}
