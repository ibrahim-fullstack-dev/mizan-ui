// src/app/features/bills-invoices/sales-invoices-list/sales-invoices-list.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ISalesInvoice } from './sales-invoices-list.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABS,
  TABLE_CONFIG,
} from './sales-invoices-list.constants';

@Component({
  selector: 'app-sales-invoices',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './sales-invoices-list.component.html',
  styleUrl: './sales-invoices-list.component.css',
})
export class SalesInvoicesListComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSalesInvoices = signal<ISalesInvoice[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      clientName: 'Ahmad Omar',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      clientName: 'Sara Khalid',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      clientName: 'Fahad Suleiman',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      clientName: 'Reem Ali',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      clientName: 'Yousef Hassan',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
  ]);

  // =====================================================
  // UI STATE
  // =====================================================

  protected readonly searchQuery = signal('');
  protected readonly activeTab = signal('all');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tabs = TABS;

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawSalesInvoices(),
    totalItems: this.rawSalesInvoices().length,
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

      case 'add-sale-retail':
        this.addSaleRetail();
        break;

      case 'add-debit':
        this.addDebitSale();
        break;

      case 'export-pdf':
        this.exportPdf();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TAB ACTIONS
  // =====================================================

  protected onTabClick(key: string): void {
    this.activeTab.set(key);

    // Apply invoice filtering here when needed.
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<ISalesInvoice>): void {
    switch (event.action) {
      case 'view':
        this.viewInvoice(event.id);
        break;

      case 'edit':
        this.editInvoice(event.id);
        break;

      case 'delete':
        this.deleteInvoice(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ISalesInvoice['id'][]): void {
    console.log('Selected sales invoice IDs:', selectedIds);
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
    console.log('Open Add Sales Invoice form');
  }

  private addSaleRetail(): void {
    console.log('Open Add Sale Retail form');
  }

  private addDebitSale(): void {
    console.log('Open Add Debit Sale form');
  }

  private viewInvoice(id: ISalesInvoice['id']): void {
    console.log('View sales invoice:', id);
  }

  private editInvoice(id: ISalesInvoice['id']): void {
    console.log('Edit sales invoice:', id);
  }

  private deleteInvoice(id: ISalesInvoice['id']): void {
    this.rawSalesInvoices.update((invoices) => invoices.filter((invoice) => invoice.id !== id));
  }

  private deleteAll(): void {
    this.rawSalesInvoices.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting sales invoices to PDF...');
  }
}
