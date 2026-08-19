// src/app/features/payments/supplier-payments/supplier-payments.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ISupplierPayment } from './supplier-payments.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './supplier-payments.constants';

@Component({
  selector: 'app-supplier-payments',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './supplier-payments.component.html',
  styleUrl: './supplier-payments.component.css',
})
export class SupplierPaymentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSupplierPayments = signal<ISupplierPayment[]>([
    {
      id: 1,
      payNumber: '1234567890',
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
    data: this.rawSupplierPayments(),
    totalItems: this.rawSupplierPayments().length,
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

  protected onTableAction(event: TableActionEvent<ISupplierPayment>): void {
    switch (event.action) {
      case 'view':
        this.viewSupplierPayment(event.id);
        break;

      case 'edit':
        this.editSupplierPayment(event.id);
        break;

      case 'delete':
        this.deleteSupplierPayment(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ISupplierPayment['id'][]): void {
    console.log('Selected supplier payment IDs:', selectedIds);
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
    console.log('Open Add Supplier Payment form');
  }

  private viewSupplierPayment(id: ISupplierPayment['id']): void {
    console.log('View supplier payment:', id);
  }

  private editSupplierPayment(id: ISupplierPayment['id']): void {
    console.log('Edit supplier payment:', id);
  }

  private deleteSupplierPayment(id: ISupplierPayment['id']): void {
    this.rawSupplierPayments.update((payments) => payments.filter((payment) => payment.id !== id));
  }

  private deleteAll(): void {
    this.rawSupplierPayments.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting supplier payments to PDF...');
  }
}
