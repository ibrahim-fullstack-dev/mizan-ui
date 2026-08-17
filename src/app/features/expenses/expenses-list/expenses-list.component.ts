// src/app/features/expenses/expenses-list/expenses-list.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IExpense } from './expenses-list.types';

// Constants
import { DATA_PAGE_CONFIG } from './expenses-list.constants';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IExpense>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawExpenses(),

      totalItems: this.rawExpenses().length,
    },
  }));
}
