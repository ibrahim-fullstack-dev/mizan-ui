// src/app/features/bills-invoices/purchase-invoices/purchase-invoices.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPurchaseInvoice } from './purchase-invoices.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABS,
  TABLE_CONFIG,
} from './purchase-invoices.constants';

@Component({
  selector: 'app-purchase-invoices',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './purchase-invoices.component.html',
  styleUrl: './purchase-invoices.component.css',
})
export class PurchaseInvoicesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchaseInvoices = signal<IPurchaseInvoice[]>([
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
    data: this.rawPurchaseInvoices(),
    totalItems: this.rawPurchaseInvoices().length,
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
  // TAB ACTIONS
  // =====================================================

  protected onTabClick(key: string): void {
    this.activeTab.set(key);

    // Apply the selected status filter here.
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IPurchaseInvoice>): void {
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

  protected onTableSelectionChange(selectedIds: IPurchaseInvoice['id'][]): void {
    console.log('Selected purchase invoice IDs:', selectedIds);
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
    console.log('Open Add Purchase Invoice form');
  }

  private viewInvoice(id: IPurchaseInvoice['id']): void {
    console.log('View purchase invoice:', id);
  }

  private editInvoice(id: IPurchaseInvoice['id']): void {
    console.log('Edit purchase invoice:', id);
  }

  private deleteInvoice(id: IPurchaseInvoice['id']): void {
    this.rawPurchaseInvoices.update((invoices) => invoices.filter((invoice) => invoice.id !== id));
  }

  private deleteAll(): void {
    this.rawPurchaseInvoices.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting purchase invoices to PDF...');
  }
}
