// src/app/features/bills-invoices/purchase-returns/purchase-returns.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPurchaseReturn } from './purchase-returns.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './purchase-returns.constants';

@Component({
  selector: 'app-purchase-returns',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './purchase-returns.component.html',
  styleUrl: './purchase-returns.component.css',
})
export class PurchaseReturnsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchaseReturns = signal<IPurchaseReturn[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      purchaseInvoiceNumber: '12345678',
      supplierName: 'Ahmad Omar',
      branchName: 'Branch 1',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      purchaseInvoiceNumber: '12345679',
      supplierName: 'Sara Khalid',
      branchName: 'Branch 2',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      purchaseInvoiceNumber: '12345680',
      supplierName: 'Fahad Suleiman',
      branchName: 'Branch 3',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      purchaseInvoiceNumber: '12345681',
      supplierName: 'Reem Ali',
      branchName: 'Branch 4',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      purchaseInvoiceNumber: '12345682',
      supplierName: 'Yousef Hassan',
      branchName: 'Branch 5',
      totalPrice: 100,
      balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
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
    data: this.rawPurchaseReturns(),
    totalItems: this.rawPurchaseReturns().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add':
        this.openAddForm();
        break;

      case 'export-pdf':
        this.exportPdf();
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

  protected onTableAction(event: TableActionEvent<IPurchaseReturn>): void {
    switch (event.action) {
      case 'view':
        this.viewPurchaseReturn(event.id);
        break;

      case 'edit':
        this.editPurchaseReturn(event.id);
        break;

      case 'delete':
        this.deletePurchaseReturn(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IPurchaseReturn['id'][]): void {
    console.log('Selected purchase return IDs:', selectedIds);
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
    console.log('Open Add Purchase Return form');
  }

  private viewPurchaseReturn(id: IPurchaseReturn['id']): void {
    console.log('View purchase return:', id);
  }

  private editPurchaseReturn(id: IPurchaseReturn['id']): void {
    console.log('Edit purchase return:', id);
  }

  private deletePurchaseReturn(id: IPurchaseReturn['id']): void {
    this.rawPurchaseReturns.update((returns) =>
      returns.filter((purchaseReturn) => purchaseReturn.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawPurchaseReturns.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting purchase returns to PDF...');
  }
}
