// src/app/features/payments/sale-payments/sale-payments.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ISalePayment } from './sale-payments.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './sale-payments.constants';

@Component({
  selector: 'app-sale-payments',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './sale-payments.component.html',
  styleUrl: './sale-payments.component.css',
})
export class SalePaymentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSalePayments = signal<ISalePayment[]>([
    {
      id: 1,
      payNumber: '1234567890',
      saleInvoiceNumber: '1234567890',
      clientName: 'Client 1',
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
    data: this.rawSalePayments(),
    totalItems: this.rawSalePayments().length,
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

  protected onTableAction(event: TableActionEvent<ISalePayment>): void {
    switch (event.action) {
      case 'view':
        this.viewSalePayment(event.id);
        break;

      case 'edit':
        this.editSalePayment(event.id);
        break;

      case 'delete':
        this.deleteSalePayment(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ISalePayment['id'][]): void {
    console.log('Selected sale payment IDs:', selectedIds);
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
    console.log('Open Add Sale Payment form');
  }

  private viewSalePayment(id: ISalePayment['id']): void {
    console.log('View sale payment:', id);
  }

  private editSalePayment(id: ISalePayment['id']): void {
    console.log('Edit sale payment:', id);
  }

  private deleteSalePayment(id: ISalePayment['id']): void {
    this.rawSalePayments.update((payments) => payments.filter((payment) => payment.id !== id));
  }

  private deleteAll(): void {
    this.rawSalePayments.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting sale payments to PDF...');
  }
}
