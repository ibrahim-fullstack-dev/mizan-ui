// src/app/features/manufacturing/productions/productions.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IProduction } from './productions.types';

// Constants
import { DATA_PAGE_CONFIG } from './productions.constants';

@Component({
  selector: 'app-productions',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './productions.component.html',
  styleUrl: './productions.component.css',
})
export class ProductionsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProductions = signal<IProduction[]>([
    {
      id: 1,
      operatingNumber: '12345678',
      ManufacturingEquationName: 'ManufacturingEquationName 1',
      productionDate: '2022-01-01',
      fromBranch: 'fromBranch 1',
      toBranch: 'toBranch 1',
      toWarehouse: 'toWarehouse 1',
      quantity: 10,
      unitPrice: 100,
      totalPrice: 1000,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IProduction>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawProductions(),

      totalItems: this.rawProductions().length,
    },
  }));
}
