// src/app/features/manufacturing/productions-settings/productions-settings.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IProductionSetting } from './productions-settings.types';

// Constants
import { DATA_PAGE_CONFIG } from './productions-settings.constant';

@Component({
  selector: 'app-productions-settings',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './productions-settings.component.html',
  styleUrl: './productions-settings.component.css',
})
export class ProductionsSettingsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProductionsSettings = signal<IProductionSetting[]>([
    {
      id: 1,
      name: 'Name 1',
      description: 'Description 1',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IProductionSetting>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawProductionsSettings(),

      totalItems: this.rawProductionsSettings().length,
    },
  }));
}
