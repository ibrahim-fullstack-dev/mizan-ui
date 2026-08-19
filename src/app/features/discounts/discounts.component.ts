// src/app/features/discounts/discounts.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IDiscount } from './discounts.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './discounts.constants';

@Component({
  selector: 'app-discounts',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.css',
})
export class DiscountsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawDiscounts = signal<IDiscount[]>([
    {
      id: 1,
      name: 'Discount 1',
      discountAmount: 10,
      startAt: '2023-01-01',
      endAt: '2023-12-31',
      isActive: true,
    },
    {
      id: 2,
      name: 'Discount 2',
      discountAmount: 20,
      startAt: '2023-02-01',
      endAt: '2023-11-30',
      isActive: false,
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
    data: this.rawDiscounts(),
    totalItems: this.rawDiscounts().length,
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

  protected onTableAction(event: TableActionEvent<IDiscount>): void {
    switch (event.action) {
      case 'view':
        this.viewDiscount(event.id);
        break;

      case 'edit':
        this.editDiscount(event.id);
        break;

      case 'delete':
        this.deleteDiscount(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IDiscount['id'][]): void {
    console.log('Selected discount IDs:', selectedIds);
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
    console.log('Open Add Discount form');
  }

  private viewDiscount(id: IDiscount['id']): void {
    console.log('View discount:', id);
  }

  private editDiscount(id: IDiscount['id']): void {
    console.log('Edit discount:', id);
  }

  private deleteDiscount(id: IDiscount['id']): void {
    this.rawDiscounts.update((discounts) => discounts.filter((discount) => discount.id !== id));
  }

  private deleteAll(): void {
    this.rawDiscounts.set([]);
  }
}
