// src/app/features/cost-center/cost-centers/cost-centers.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ICostCenter } from './cost-centers.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './cost-centers.constants';

@Component({
  selector: 'app-cost-centers',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './cost-centers.component.html',
  styleUrl: './cost-centers.component.css',
})
export class CostCentersComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCostCenters = signal<ICostCenter[]>([
    {
      id: 1,
      nameInArabic: 'مركز التكلفة 1',
      nameInEnglish: 'Cost Center 1',
      code: 'CC001',
      type: 'Type 1',
      status: 'Status 1',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
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
    data: this.rawCostCenters(),
    totalItems: this.rawCostCenters().length,
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

  protected onTableAction(event: TableActionEvent<ICostCenter>): void {
    switch (event.action) {
      case 'view':
        this.viewCostCenter(event.id);
        break;

      case 'edit':
        this.editCostCenter(event.id);
        break;

      case 'delete':
        this.deleteCostCenter(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ICostCenter['id'][]): void {
    console.log('Selected cost center IDs:', selectedIds);
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
    console.log('Open Add Cost Center form');
  }

  private viewCostCenter(id: ICostCenter['id']): void {
    console.log('View cost center:', id);
  }

  private editCostCenter(id: ICostCenter['id']): void {
    console.log('Edit cost center:', id);
  }

  private deleteCostCenter(id: ICostCenter['id']): void {
    this.rawCostCenters.update((costCenters) =>
      costCenters.filter((costCenter) => costCenter.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawCostCenters.set([]);
  }
}
