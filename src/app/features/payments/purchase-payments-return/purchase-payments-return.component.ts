// src/app/features/payments/purchase-payments-return/purchase-payments-return.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPurchasePaymentReturn } from './purchase-payments-return.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './purchase-payments-return.constants';

@Component({
  selector: 'app-purchase-payments-return',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './purchase-payments-return.component.html',
  styleUrl: './purchase-payments-return.component.css',
})
export class PurchasePaymentsReturnComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchasePaymentReturns = signal<IPurchasePaymentReturn[]>([
    {
      id: 1,
      payNumber: '1234567890',
      returnedPurchaseInvoiceNumber: '1234567890',
      supplierName: 'Supplier 1',
      paymentMethod: 'Payment Method 1',
      amount: 100,
      date: '2023-01-01',
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
    data: this.rawPurchasePaymentReturns(),
    totalItems: this.rawPurchasePaymentReturns().length,
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

  protected onTableAction(event: TableActionEvent<IPurchasePaymentReturn>): void {
    switch (event.action) {
      case 'view':
        this.viewPurchasePaymentReturn(event.id);
        break;

      case 'edit':
        this.editPurchasePaymentReturn(event.id);
        break;

      case 'delete':
        this.deletePurchasePaymentReturn(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IPurchasePaymentReturn['id'][]): void {
    console.log('Selected purchase payment return IDs:', selectedIds);
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
    console.log('Open Add Purchase Payment Return form');
  }

  private viewPurchasePaymentReturn(id: IPurchasePaymentReturn['id']): void {
    console.log('View purchase payment return:', id);
  }

  private editPurchasePaymentReturn(id: IPurchasePaymentReturn['id']): void {
    console.log('Edit purchase payment return:', id);
  }

  private deletePurchasePaymentReturn(id: IPurchasePaymentReturn['id']): void {
    this.rawPurchasePaymentReturns.update((returns) =>
      returns.filter((paymentReturn) => paymentReturn.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawPurchasePaymentReturns.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting purchase payment returns to PDF...');
  }
}
