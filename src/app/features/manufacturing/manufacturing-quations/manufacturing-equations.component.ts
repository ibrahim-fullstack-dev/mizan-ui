// src/app/features/manufacturing/productions/productions.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IManufacturingEquation } from './manufacturing-equations.types';

// Constants
import { DATA_PAGE_CONFIG } from './manufacturing-equations.constants';

@Component({
  selector: 'app-manufacturing-equations',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './manufacturing-equations.component.html',
  styleUrl: './manufacturing-equations.component.css',
})
export class ManufacturingEquationsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawManufacturingEquations = signal<IManufacturingEquation[]>([
    {
      id: 1,
      name: 'Name 1',
      manufacturingType: 'Manufacturing Type 1',
      product: 'Product 1',
      productType: 'Product Type 1',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IManufacturingEquation>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawManufacturingEquations(),

      totalItems: this.rawManufacturingEquations().length,
    },
  }));
}
