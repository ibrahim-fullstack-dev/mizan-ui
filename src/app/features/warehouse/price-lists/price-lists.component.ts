// src/app/features/warehouse/price-lists/price-lists.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPriceList } from './price-lists.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './price-lists.constants';

@Component({
  selector: 'app-price-lists',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './price-lists.component.html',
  styleUrl: './price-lists.component.css',
})
export class PriceListsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPriceLists = signal<IPriceList[]>([
    {
      id: 1,
      name: 'Price 1',
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Price 2',
      description: 'Description 2',
    },
    {
      id: 3,
      name: 'Price 3',
      description: 'Description 3',
    },
    {
      id: 4,
      name: 'Price 4',
      description: 'Description 4',
    },
    {
      id: 5,
      name: 'Price 5',
      description: 'Description 5',
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
    data: this.rawPriceLists(),
    totalItems: this.rawPriceLists().length,
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

  protected onTableAction(event: TableActionEvent<IPriceList>): void {
    switch (event.action) {
      case 'view':
        this.viewPriceList(event.id);
        break;

      case 'edit':
        this.editPriceList(event.id);
        break;

      case 'delete':
        this.deletePriceList(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IPriceList['id'][]): void {
    console.log('Selected price list IDs:', selectedIds);
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
    console.log('Open Add Price List form');
  }

  private viewPriceList(id: IPriceList['id']): void {
    console.log('View price list:', id);
  }

  private editPriceList(id: IPriceList['id']): void {
    console.log('Edit price list:', id);
  }

  private deletePriceList(id: IPriceList['id']): void {
    this.rawPriceLists.update((priceLists) =>
      priceLists.filter((priceList) => priceList.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawPriceLists.set([]);
  }
}
