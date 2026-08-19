// src/app/features/payments/client-payments/client-payments.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IClientPayment } from './client-payments.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './client-payments.constants';

@Component({
  selector: 'app-client-payments',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './client-payments.component.html',
  styleUrl: './client-payments.component.css',
})
export class ClientPaymentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawClientPayments = signal<IClientPayment[]>([
    {
      id: 1,
      payNumber: '1234567890',
      clientName: 'Client 1',
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
    data: this.rawClientPayments(),
    totalItems: this.rawClientPayments().length,
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

  protected onTableAction(event: TableActionEvent<IClientPayment>): void {
    switch (event.action) {
      case 'view':
        this.viewClientPayment(event.id);
        break;

      case 'edit':
        this.editClientPayment(event.id);
        break;

      case 'delete':
        this.deleteClientPayment(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IClientPayment['id'][]): void {
    console.log('Selected client payment IDs:', selectedIds);
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
    console.log('Open Add Client Payment form');
  }

  private viewClientPayment(id: IClientPayment['id']): void {
    console.log('View client payment:', id);
  }

  private editClientPayment(id: IClientPayment['id']): void {
    console.log('Edit client payment:', id);
  }

  private deleteClientPayment(id: IClientPayment['id']): void {
    this.rawClientPayments.update((payments) => payments.filter((payment) => payment.id !== id));
  }

  private deleteAll(): void {
    this.rawClientPayments.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting client payments to PDF...');
  }
}
