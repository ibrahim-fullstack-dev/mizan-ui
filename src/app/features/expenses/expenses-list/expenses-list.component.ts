// src/app/features/expenses/expenses-list/expenses-list.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IExpense } from './expenses-list.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './expenses-list.constants';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './expenses-list.component.html',
  styleUrl: './expenses-list.component.css',
})
export class ExpensesListComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawExpenses = signal<IExpense[]>([
    {
      id: 1,
      referenceNumber: '1234567890',
      expenseNote: 'Expense Note',
      expenseCategory: 'Expense Category',
      date: '2023-01-01',
      branch: 'Branch',
      paymentMethod: 'Payment Method',
      type: 'Type',
      taxableAmount: 100,
      taxAmount: 20,
      totalAmount: 120,
      publicNote: 'Public Note',
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
    data: this.rawExpenses(),
    totalItems: this.rawExpenses().length,
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

  protected onTableAction(event: TableActionEvent<IExpense>): void {
    switch (event.action) {
      case 'view':
        this.viewExpense(event.id);
        break;

      case 'edit':
        this.editExpense(event.id);
        break;

      case 'delete':
        this.deleteExpense(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IExpense['id'][]): void {
    console.log('Selected expense IDs:', selectedIds);
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
    console.log('Open Add Expense form');
  }

  private viewExpense(id: IExpense['id']): void {
    console.log('View expense:', id);
  }

  private editExpense(id: IExpense['id']): void {
    console.log('Edit expense:', id);
  }

  private deleteExpense(id: IExpense['id']): void {
    this.rawExpenses.update((expenses) => expenses.filter((expense) => expense.id !== id));
  }

  private deleteAll(): void {
    this.rawExpenses.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting expenses to PDF...');
  }
}
