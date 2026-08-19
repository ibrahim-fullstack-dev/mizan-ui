// src/app/features/suppliers/suppliers.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ISupplier } from './suppliers.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './suppliers.constants';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css',
})
export class SuppliersComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSuppliers = signal<ISupplier[]>([
    {
      id: 1,
      name: 'Ahmad Omar',
      email: 'ahmad@example.com',
      contact: '+967 12345678',
    },
    {
      id: 2,
      name: 'Sara Khalid',
      email: 'sara@example.com',
      contact: '+967 98765432',
    },
    {
      id: 3,
      name: 'Fahad Suleiman',
      email: 'fahad@example.com',
      contact: '+967 98765432',
    },
    {
      id: 4,
      name: 'Reem Ali',
      email: 'reem@example.com',
      contact: '+967 98765432',
    },
    {
      id: 5,
      name: 'Yousef Hassan',
      email: 'yousef@example.com',
      contact: '+967 12345678',
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
    data: this.rawSuppliers(),
    totalItems: this.rawSuppliers().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add-supplier':
        this.openAddForm();
        break;

      case 'export-pdf':
        this.exportPdf();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<ISupplier>): void {
    switch (event.action) {
      case 'view':
        this.viewSupplier(event.id);
        break;

      case 'edit':
        this.editSupplier(event.id);
        break;

      case 'delete':
        this.deleteSupplier(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ISupplier['id'][]): void {
    console.log('Selected supplier IDs:', selectedIds);
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
    console.log('Open Add Supplier form');
  }

  private viewSupplier(id: ISupplier['id']): void {
    console.log('View supplier:', id);
  }

  private editSupplier(id: ISupplier['id']): void {
    console.log('Edit supplier:', id);
  }

  private deleteSupplier(id: ISupplier['id']): void {
    this.rawSuppliers.update((suppliers) => suppliers.filter((supplier) => supplier.id !== id));
  }

  private exportPdf(): void {
    console.log('Exporting suppliers to PDF...');
  }
}
