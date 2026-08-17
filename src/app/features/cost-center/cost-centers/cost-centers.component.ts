// src/app/features/cost-center/cost-centers/cost-centers.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ICostCenter } from './cost-centers.types';

// Constants
import { DATA_PAGE_CONFIG } from './cost-centers.constants';

@Component({
  selector: 'app-cost-centers',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ICostCenter>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawCostCenters(),

      totalItems: this.rawCostCenters().length,
    },
  }));
}
