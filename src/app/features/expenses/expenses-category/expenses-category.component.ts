// src/app/features/expenses/expenses-category/expenses-category.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IExpenseCategory } from './expenses-category.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './expenses-category.constants';

@Component({
  selector: 'app-expenses-category',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './expenses-category.component.html',
  styleUrl: './expenses-category.component.css',
})
export class ExpensesCategoryComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawExpenses = signal<IExpenseCategory[]>([
    {
      id: 1,
      name: 'Expense 1',
      accountName: 'Account 1',
      createdAt: '2023-01-01',
    },
    {
      id: 2,
      name: 'Expense 2',
      accountName: 'Account 2',
      createdAt: '2023-01-02',
    },
    {
      id: 3,
      name: 'Expense 3',
      accountName: 'Account 3',
      createdAt: '2023-01-03',
    },
    {
      id: 4,
      name: 'Expense 4',
      accountName: 'Account 4',
      createdAt: '2023-01-04',
    },
    {
      id: 5,
      name: 'Expense 5',
      accountName: 'Account 5',
      createdAt: '2023-01-05',
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

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IExpenseCategory>): void {
    switch (event.action) {
      case 'view':
        this.viewExpenseCategory(event.id);
        break;

      case 'edit':
        this.editExpenseCategory(event.id);
        break;

      case 'delete':
        this.deleteExpenseCategory(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IExpenseCategory['id'][]): void {
    console.log('Selected expense category IDs:', selectedIds);
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
    console.log('Open Add Expense Category form');
  }

  private viewExpenseCategory(id: IExpenseCategory['id']): void {
    console.log('View expense category:', id);
  }

  private editExpenseCategory(id: IExpenseCategory['id']): void {
    console.log('Edit expense category:', id);
  }

  private deleteExpenseCategory(id: IExpenseCategory['id']): void {
    this.rawExpenses.update((expenses) => expenses.filter((expense) => expense.id !== id));
  }

  private deleteAll(): void {
    this.rawExpenses.set([]);
  }
}
