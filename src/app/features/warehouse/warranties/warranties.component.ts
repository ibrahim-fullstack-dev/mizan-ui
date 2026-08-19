// src/app/features/warehouse/warranties/warranties.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IWarranty } from './warranties.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './warranties.constants';

@Component({
  selector: 'app-warranties',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './warranties.component.html',
  styleUrl: './warranties.component.css',
})
export class WarrantiesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawWarranties = signal<IWarranty[]>([
    {
      id: 1,
      name: 'Warranty 1',
      duration: '1 year',
      durationType: 'Fixed',
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Warranty 2',
      duration: '2 years',
      durationType: 'Fixed',
      description: 'Description 2',
    },
    {
      id: 3,
      name: 'Warranty 3',
      duration: '3 years',
      durationType: 'Fixed',
      description: 'Description 3',
    },
    {
      id: 4,
      name: 'Warranty 4',
      duration: '4 years',
      durationType: 'Fixed',
      description: 'Description 4',
    },
    {
      id: 5,
      name: 'Warranty 5',
      duration: '5 years',
      durationType: 'Fixed',
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
    data: this.rawWarranties(),
    totalItems: this.rawWarranties().length,
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

  protected onTableAction(event: TableActionEvent<IWarranty>): void {
    switch (event.action) {
      case 'view':
        this.viewWarranty(event.id);
        break;

      case 'edit':
        this.editWarranty(event.id);
        break;

      case 'delete':
        this.deleteWarranty(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IWarranty['id'][]): void {
    console.log('Selected warranty IDs:', selectedIds);
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
    console.log('Open Add Warranty form');
  }

  private viewWarranty(id: IWarranty['id']): void {
    console.log('View warranty:', id);
  }

  private editWarranty(id: IWarranty['id']): void {
    console.log('Edit warranty:', id);
  }

  private deleteWarranty(id: IWarranty['id']): void {
    this.rawWarranties.update((warranties) => warranties.filter((warranty) => warranty.id !== id));
  }

  private deleteAll(): void {
    this.rawWarranties.set([]);
  }
}
