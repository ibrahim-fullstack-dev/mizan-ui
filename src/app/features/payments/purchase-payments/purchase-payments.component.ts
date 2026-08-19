// src/app/features/payments/purchase-payments/purchase-payments.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPurchasePayment } from './purchase-payments.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './purchase-payments.constants';

@Component({
  selector: 'app-purchase-payments',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './purchase-payments.component.html',
  styleUrl: './purchase-payments.component.css',
})
export class PurchasePaymentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchasePayments = signal<IPurchasePayment[]>([
    {
      id: 1,
      payNumber: '1234567890',
      purchaseInvoiceNumber: '1234567890',
      supplierName: 'Supplier 1',
      paymentMethod: 'Payment Method 1',
      amount: 100,
      branch: 'Branch 1',
      date: '2023-01-01',
      note: 'Note 1',
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
    data: this.rawPurchasePayments(),
    totalItems: this.rawPurchasePayments().length,
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

  protected onTableAction(event: TableActionEvent<IPurchasePayment>): void {
    switch (event.action) {
      case 'view':
        this.viewPurchasePayment(event.id);
        break;

      case 'edit':
        this.editPurchasePayment(event.id);
        break;

      case 'delete':
        this.deletePurchasePayment(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IPurchasePayment['id'][]): void {
    console.log('Selected purchase payment IDs:', selectedIds);
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
    console.log('Open Add Purchase Payment form');
  }

  private viewPurchasePayment(id: IPurchasePayment['id']): void {
    console.log('View purchase payment:', id);
  }

  private editPurchasePayment(id: IPurchasePayment['id']): void {
    console.log('Edit purchase payment:', id);
  }

  private deletePurchasePayment(id: IPurchasePayment['id']): void {
    this.rawPurchasePayments.update((payments) => payments.filter((payment) => payment.id !== id));
  }

  private deleteAll(): void {
    this.rawPurchasePayments.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting purchase payments to PDF...');
  }
}
