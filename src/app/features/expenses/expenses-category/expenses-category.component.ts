// src/app/features/expenses/expenses-category/expenses-category.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IExpenseCategory } from './expenses-category.types';

// Constants
import { DATA_PAGE_CONFIG } from './expenses-category.constants';

@Component({
  selector: 'app-expenses-category',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IExpenseCategory>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawExpenses(),

      totalItems: this.rawExpenses().length,
    },
  }));
}
