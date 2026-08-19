// src/app/features/cost-center/cost-center-allocations/cost-center-allocations.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ICostCenterAllocation } from './cost-center-allocations.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './cost-center-allocations.constants';

@Component({
  selector: 'app-cost-center-allocations',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './cost-center-allocations.component.html',
  styleUrl: './cost-center-allocations.component.css',
})
export class CostCenterAllocationsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCostCenterAllocations = signal<ICostCenterAllocation[]>([
    {
      id: 1,
      costCenter: 'CC001',
      ledgerReference: '12345678',
      reference: '12345678',
      transactionType: 'Debit',
      credit: 100,
      debit: 100,
      status: 'Unpaid',
      createdAt: '2022-01-01',
    },
    {
      id: 2,
      costCenter: 'CC001',
      ledgerReference: '12345678',
      reference: '12345678',
      transactionType: 'Debit',
      credit: 100,
      debit: 100,
      status: 'Unpaid',
      createdAt: '2022-01-01',
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
    data: this.rawCostCenterAllocations(),
    totalItems: this.rawCostCenterAllocations().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add':
        this.openAddForm();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<ICostCenterAllocation>): void {
    switch (event.action) {
      case 'view':
        this.viewAllocation(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ICostCenterAllocation['id'][]): void {
    console.log('Selected allocation IDs:', selectedIds);
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
    console.log('Open Add Cost Center Allocation form');
  }

  private viewAllocation(id: ICostCenterAllocation['id']): void {
    console.log('View cost center allocation:', id);
  }
}
