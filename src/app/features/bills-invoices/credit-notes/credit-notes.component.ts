// src/app/features/bills-invoices/credit-notes/credit-notes.component.ts

import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ICreditNote } from './credit-notes.types';

// Constants
import { DATA_PAGE_CONFIG } from './credit-notes.constants';

@Component({
  selector: 'app-credit-notes',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './credit-notes.component.html',
  styleUrl: './credit-notes.component.css',
})
export class CreditNotesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCreditNotes = signal<ICreditNote[]>([
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ICreditNote>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawCreditNotes(),

      totalItems: this.rawCreditNotes().length,
    },
  }));
}
