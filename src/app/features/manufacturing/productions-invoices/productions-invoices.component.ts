// src/app/features/manufacturing/productions-invoices/productions-invoices.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IProductionInvoice } from './productions-invoices.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './productions-invoices.constants';

@Component({
  selector: 'app-productions-invoices',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './productions-invoices.component.html',
  styleUrl: './productions-invoices.component.css',
})
export class ProductionsInvoicesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProductionsInvoices = signal<IProductionInvoice[]>([
    {
      id: 1,
      invoiceNumber: 'INV-0001',
      ProductionProductName: 'Product 1',
      branch: 'Branch 1',
      warehouse: 'Warehouse 1',
      date: '2023-01-01',
      totalPrice: 1000,
    },
    {
      id: 2,
      invoiceNumber: 'INV-0002',
      ProductionProductName: 'Product 2',
      branch: 'Branch 2',
      warehouse: 'Warehouse 2',
      date: '2023-01-02',
      totalPrice: 2000,
    },
    {
      id: 3,
      invoiceNumber: 'INV-0003',
      ProductionProductName: 'Product 3',
      branch: 'Branch 3',
      warehouse: 'Warehouse 3',
      date: '2023-01-03',
      totalPrice: 3000,
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
    data: this.rawProductionsInvoices(),
    totalItems: this.rawProductionsInvoices().length,
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

  protected onTableAction(event: TableActionEvent<IProductionInvoice>): void {
    switch (event.action) {
      case 'view':
        this.viewProductionInvoice(event.id);
        break;

      case 'edit':
        this.editProductionInvoice(event.id);
        break;

      case 'delete':
        this.deleteProductionInvoice(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IProductionInvoice['id'][]): void {
    console.log('Selected production invoice IDs:', selectedIds);
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
    console.log('Open Add Production Invoice form');
  }

  private viewProductionInvoice(id: IProductionInvoice['id']): void {
    console.log('View production invoice:', id);
  }

  private editProductionInvoice(id: IProductionInvoice['id']): void {
    console.log('Edit production invoice:', id);
  }

  private deleteProductionInvoice(id: IProductionInvoice['id']): void {
    this.rawProductionsInvoices.update((invoices) =>
      invoices.filter((invoice) => invoice.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawProductionsInvoices.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting production invoices to PDF...');
  }
}
