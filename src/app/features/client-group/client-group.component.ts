// src/app/features/client-group/client-group.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IClientGroup } from './client-group.types';

// Constants
import { DATA_PAGE_CONFIG } from './client-group.constants';

@Component({
  selector: 'app-client-group',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './client-group.component.html',
  styleUrl: './client-group.component.css',
})
export class ClientGroupComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawClientGroups = signal<IClientGroup[]>([
    {
      id: 1,
      name: 'General Office',
      type: 'Company',
      priceListValue: '1000',
      percentage: '10',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IClientGroup>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawClientGroups(),

      totalItems: this.rawClientGroups().length,
    },
  }));
}
