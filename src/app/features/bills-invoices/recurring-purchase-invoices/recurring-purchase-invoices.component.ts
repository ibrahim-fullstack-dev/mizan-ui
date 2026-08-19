// src/app/features/bills-invoices/recurring-purchase-invoices/recurring-purchase-invoices.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IRecurringPurchaseInvoice } from './recurring-purchase-invoices.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  TABLE_CONFIG,
} from './recurring-purchase-invoices.constants';

@Component({
  selector: 'app-recurring-purchase-invoices',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, TableComponent],
  templateUrl: './recurring-purchase-invoices.component.html',
  styleUrl: './recurring-purchase-invoices.component.css',
})
export class RecurringPurchaseInvoicesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawRecurringPurchaseInvoices = signal<IRecurringPurchaseInvoice[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
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

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawRecurringPurchaseInvoices(),
    totalItems: this.rawRecurringPurchaseInvoices().length,
  }));

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IRecurringPurchaseInvoice>): void {
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
  // TABLE PAGINATION
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // ACTIONS
  // =====================================================

  private viewInvoice(id: IRecurringPurchaseInvoice['id']): void {
    console.log('View recurring purchase invoice:', id);
  }

  private editInvoice(id: IRecurringPurchaseInvoice['id']): void {
    console.log('Edit recurring purchase invoice:', id);
  }

  private deleteInvoice(id: IRecurringPurchaseInvoice['id']): void {
    this.rawRecurringPurchaseInvoices.update((invoices) =>
      invoices.filter((invoice) => invoice.id !== id),
    );
  }
}
