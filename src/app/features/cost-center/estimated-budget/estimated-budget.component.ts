// src/app/features/cost-center/estimated-budget/estimated-budget.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IEstimatedBudget } from './estimated-budget.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './estimated-budget.constants';

@Component({
  selector: 'app-estimated-budget',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawEstimatedBudgets(),
    totalItems: this.rawEstimatedBudgets().length,
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

  protected onTableAction(event: TableActionEvent<IEstimatedBudget>): void {
    switch (event.action) {
      case 'view':
        this.viewEstimatedBudget(event.id);
        break;

      case 'edit':
        this.editEstimatedBudget(event.id);
        break;

      case 'delete':
        this.deleteEstimatedBudget(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IEstimatedBudget['id'][]): void {
    console.log('Selected estimated budget IDs:', selectedIds);
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
    console.log('Open Add Estimated Budget form');
  }

  private viewEstimatedBudget(id: IEstimatedBudget['id']): void {
    console.log('View estimated budget:', id);
  }

  private editEstimatedBudget(id: IEstimatedBudget['id']): void {
    console.log('Edit estimated budget:', id);
  }

  private deleteEstimatedBudget(id: IEstimatedBudget['id']): void {
    this.rawEstimatedBudgets.update((budgets) => budgets.filter((budget) => budget.id !== id));
  }

  private deleteAll(): void {
    this.rawEstimatedBudgets.set([]);
  }
}
