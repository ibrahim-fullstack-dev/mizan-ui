// src/app/features/damages/damages.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IDamage } from './damages.types';

// Constants
import { DATA_PAGE_CONFIG } from './damages.constants';

@Component({
  selector: 'app-damages',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './damages.component.html',
  styleUrl: './damages.component.css',
})
export class DamagesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawDamages = signal<IDamage[]>([
    {
      id: 1,
      referenceNumber: '123456789',
      name: 'Damage 1',
      branch: 'Branch 1',
      warehouse: 'Warehouse 1',
      totalAmountRecovered: 100,
      date: '2023-01-01',
      notes: 'Damage notes 1',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IDamage>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawDamages(),

      totalItems: this.rawDamages().length,
    },
  }));
}
