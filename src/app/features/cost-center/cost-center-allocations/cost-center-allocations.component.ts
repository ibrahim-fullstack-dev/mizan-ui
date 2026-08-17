// src/app/features/cost-center/cost-center-allocations/cost-center-allocations.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ICostCenterAllocation } from './cost-center-allocations.types';

// Constants
import { DATA_PAGE_CONFIG } from './cost-center-allocations.constants';

@Component({
  selector: 'app-cost-center-allocations',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ICostCenterAllocation>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawCostCenterAllocations(),

      totalItems: this.rawCostCenterAllocations().length,
    },
  }));
}
