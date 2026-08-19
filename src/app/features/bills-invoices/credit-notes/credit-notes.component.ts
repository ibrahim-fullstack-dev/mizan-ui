// src/app/features/bills-invoices/credit-notes/credit-notes.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ICreditNote } from './credit-notes.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './credit-notes.constants';

@Component({
  selector: 'app-credit-notes',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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

    data: this.rawCreditNotes(),

    totalItems: this.rawCreditNotes().length,
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

  protected onTableAction(event: TableActionEvent<ICreditNote>): void {
    switch (event.action) {
      case 'view':
        this.viewCreditNote(event.id);
        break;

      case 'edit':
        this.editCreditNote(event.id);
        break;

      case 'delete':
        this.deleteCreditNote(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ICreditNote['id'][]): void {
    console.log('Selected credit note IDs:', selectedIds);
  }

  // =====================================================
  // TABLE PAGINATION
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // ADD FORM
  // =====================================================

  private openAddForm(): void {
    console.log('Open Add Credit Note form');
  }

  // =====================================================
  // CREDIT NOTE ACTIONS
  // =====================================================

  private viewCreditNote(id: ICreditNote['id']): void {
    console.log('View credit note:', id);
  }

  private editCreditNote(id: ICreditNote['id']): void {
    console.log('Edit credit note:', id);
  }

  private deleteCreditNote(id: ICreditNote['id']): void {
    this.rawCreditNotes.update((creditNotes) =>
      creditNotes.filter((creditNote) => creditNote.id !== id),
    );
  }

  // =====================================================
  // OTHER ACTIONS
  // =====================================================

  private deleteAll(): void {
    this.rawCreditNotes.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting credit notes to PDF...');
  }
}
