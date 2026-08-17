// src/app/features/cost-center/estimated-budget/estimated-budget.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IEstimatedBudget } from './estimated-budget.types';

// Constants
import { DATA_PAGE_CONFIG } from './estimated-budget.constants';

@Component({
  selector: 'app-estimated-budget',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './estimated-budget.component.html',
  styleUrl: './estimated-budget.component.css',
})
export class EstimatedBudgetComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawEstimatedBudgets = signal<IEstimatedBudget[]>([
    {
      id: 1,
      name: 'CC001',
      code: 'CC001',
      periodType: '',
      periodStart: '2023-01-01',
      periodEnd: '2023-12-31',
      budgetYear: '2023',
      costCenter: 'CC001',
      status: 'Founded',
    },
    {
      id: 2,
      name: 'CC002',
      code: 'CC002',
      periodType: '',
      periodStart: '2023-01-01',
      periodEnd: '2023-12-31',
      budgetYear: '2023',
      costCenter: 'CC001',
      status: 'Founded',
    },
    {
      id: 3,
      name: 'CC003',
      code: 'CC003',
      periodType: '',
      periodStart: '2023-01-01',
      periodEnd: '2023-12-31',
      budgetYear: '2023',
      costCenter: 'CC001',
      status: 'Founded',
    },
    {
      id: 4,
      name: 'CC004',
      code: 'CC004',
      periodType: '',
      periodStart: '2023-01-01',
      periodEnd: '2023-12-31',
      budgetYear: '2023',
      costCenter: 'CC001',
      status: 'Founded',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IEstimatedBudget>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawEstimatedBudgets(),

      totalItems: this.rawEstimatedBudgets().length,
    },
  }));
}
