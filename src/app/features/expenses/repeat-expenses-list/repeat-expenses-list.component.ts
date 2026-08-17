// src/app/features/expenses/repeat-expenses-list/repeat-expenses-list.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IRepeatExpense } from './repeat-expenses-list.types';

// Constants
import { DATA_PAGE_CONFIG } from './repeat-expenses-list.constants';

@Component({
  selector: 'app-repeat-expenses-list',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IRepeatExpense>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawExpenses(),

      totalItems: this.rawExpenses().length,
    },
  }));
}
