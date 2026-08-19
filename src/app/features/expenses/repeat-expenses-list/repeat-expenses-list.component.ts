// src/app/features/expenses/repeat-expenses-list/repeat-expenses-list.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IRepeatExpense } from './repeat-expenses-list.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './repeat-expenses-list.constants';

@Component({
  selector: 'app-repeat-expenses-list',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './repeat-expenses-list.component.html',
  styleUrl: './repeat-expenses-list.component.css',
})
export class RepeatExpensesListComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawExpenses = signal<IRepeatExpense[]>([
    {
      id: 1,
      referenceNumber: '1234567890',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
    {
      id: 2,
      referenceNumber: '1234567891',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
    {
      id: 3,
      referenceNumber: '1234567892',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
    {
      id: 4,
      referenceNumber: '1234567893',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
    {
      id: 5,
      referenceNumber: '1234567894',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
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

  protected onTableAction(event: TableActionEvent<IRepeatExpense>): void {
    switch (event.action) {
      case 'view':
        this.viewRepeatExpense(event.id);
        break;

      case 'edit':
        this.editRepeatExpense(event.id);
        break;

      case 'delete':
        this.deleteRepeatExpense(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IRepeatExpense['id'][]): void {
    console.log('Selected repeat expense IDs:', selectedIds);
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
    console.log('Open Add Repeat Expense form');
  }

  private viewRepeatExpense(id: IRepeatExpense['id']): void {
    console.log('View repeat expense:', id);
  }

  private editRepeatExpense(id: IRepeatExpense['id']): void {
    console.log('Edit repeat expense:', id);
  }

  private deleteRepeatExpense(id: IRepeatExpense['id']): void {
    this.rawExpenses.update((expenses) => expenses.filter((expense) => expense.id !== id));
  }

  private deleteAll(): void {
    this.rawExpenses.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting repeat expenses to PDF...');
  }
}
