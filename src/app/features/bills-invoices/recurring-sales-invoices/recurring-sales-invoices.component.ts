// src/app/features/bills-invoices/recurring-sales-invoices/recurring-sales-invoices.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IRecurringSalesInvoice } from './recurring-sales-invoices.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, TABLE_CONFIG } from './recurring-sales-invoices.constants';

@Component({
  selector: 'app-recurring-sales-invoices',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, TableComponent],
  templateUrl: './recurring-sales-invoices.component.html',
  styleUrl: './recurring-sales-invoices.component.css',
})
export class RecurringSalesInvoicesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawRecurringSalesInvoices = signal<IRecurringSalesInvoice[]>([
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
    data: this.rawRecurringSalesInvoices(),
    totalItems: this.rawRecurringSalesInvoices().length,
  }));

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IRecurringSalesInvoice>): void {
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

  private viewInvoice(id: IRecurringSalesInvoice['id']): void {
    console.log('View recurring sales invoice:', id);
  }

  private editInvoice(id: IRecurringSalesInvoice['id']): void {
    console.log('Edit recurring sales invoice:', id);
  }

  private deleteInvoice(id: IRecurringSalesInvoice['id']): void {
    this.rawRecurringSalesInvoices.update((invoices) =>
      invoices.filter((invoice) => invoice.id !== id),
    );
  }
}
