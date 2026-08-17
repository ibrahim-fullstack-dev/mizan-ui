// src/app/features/warehouse/warranties/warranties.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IWarranty } from './warranties.types';

// Constants
import { DATA_PAGE_CONFIG } from './warranties.constants';

@Component({
  selector: 'app-warranties',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './warranties.component.html',
  styleUrl: './warranties.component.css',
})
export class WarrantiesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawWarranties = signal<IWarranty[]>([
    {
      id: 1,
      name: 'Warranty 1',
      duration: '1 year',
      durationType: 'Fixed',
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Warranty 2',
      duration: '2 years',
      durationType: 'Fixed',
      description: 'Description 2',
    },
    {
      id: 3,
      name: 'Warranty 3',
      duration: '3 years',
      durationType: 'Fixed',
      description: 'Description 3',
    },
    {
      id: 4,
      name: 'Warranty 4',
      duration: '4 years',
      durationType: 'Fixed',
      description: 'Description 4',
    },
    {
      id: 5,
      name: 'Warranty 5',
      duration: '5 years',
      durationType: 'Fixed',
      description: 'Description 5',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IWarranty>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawWarranties(),

      totalItems: this.rawWarranties().length,
    },
  }));
}
