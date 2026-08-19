// src/app/features/payments/sale-payments-return/sale-payments-return.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ISalePaymentReturn } from './sale-payments-return.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './sale-payments-return.constants';

@Component({
  selector: 'app-sale-payments-return',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './sale-payments-return.component.html',
  styleUrl: './sale-payments-return.component.css',
})
export class SalePaymentsReturnComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSalePaymentReturns = signal<ISalePaymentReturn[]>([
    {
      id: 1,
      payNumber: '1234567890',
      returnSaleInvoiceNumber: '1234567890',
      clientName: 'Client 1',
      paymentMethod: 'Payment Method 1',
      amount: 100,
      branch: 'Branch 1',
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
    data: this.rawSalePaymentReturns(),
    totalItems: this.rawSalePaymentReturns().length,
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

  protected onTableAction(event: TableActionEvent<ISalePaymentReturn>): void {
    switch (event.action) {
      case 'view':
        this.viewSalePaymentReturn(event.id);
        break;

      case 'edit':
        this.editSalePaymentReturn(event.id);
        break;

      case 'delete':
        this.deleteSalePaymentReturn(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ISalePaymentReturn['id'][]): void {
    console.log('Selected sale payment return IDs:', selectedIds);
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
    console.log('Open Add Sale Payment Return form');
  }

  private viewSalePaymentReturn(id: ISalePaymentReturn['id']): void {
    console.log('View sale payment return:', id);
  }

  private editSalePaymentReturn(id: ISalePaymentReturn['id']): void {
    console.log('Edit sale payment return:', id);
  }

  private deleteSalePaymentReturn(id: ISalePaymentReturn['id']): void {
    this.rawSalePaymentReturns.update((returns) =>
      returns.filter((paymentReturn) => paymentReturn.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawSalePaymentReturns.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting sale payment returns to PDF...');
  }
}
