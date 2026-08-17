// src/app/features/warehouse/units/units.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IUnit } from './units.types';

// Constants
import { DATA_PAGE_CONFIG } from './units.constants';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './units.component.html',
  styleUrl: './units.component.css',
})
export class UnitsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawUnits = signal<IUnit[]>([
    {
      id: 1,
      name: 'Unit 1',
      shortName: 'U1',
      useFraction: true,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IUnit>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawUnits(),

      totalItems: this.rawUnits().length,
    },
  }));
}
