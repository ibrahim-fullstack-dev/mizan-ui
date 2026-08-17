// src/app/features/number-group/number-group.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { INumberGroup } from './number-group.types';

// Constants
import { DATA_PAGE_CONFIG } from './number-group.constants';

@Component({
  selector: 'app-number-group',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './number-group.component.html',
  styleUrl: './number-group.component.css',
})
export class NumberGroupComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawNumberGroups = signal<INumberGroup[]>([
    {
      id: 1,
      name: 'number group 1',
      prefix: 'prefix',
      next: 1,
      section: 'section',
      leftPad: 1,
      yearPrefix: 'yearPrefix',
      monthPrefix: 'monthPrefix',
      status: 'active',
      USED: true,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<INumberGroup>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawNumberGroups(),

      totalItems: this.rawNumberGroups().length,
    },
  }));
}
