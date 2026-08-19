// src/app/features/assets-depreciation/depreciation/depreciation.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TablePageEvent } from '@components/table/table.types';

import { IDepreciation } from './depreciation.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, TABLE_CONFIG } from './depreciation.constants';

@Component({
  selector: 'app-assets-depreciation',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, TableComponent],
  templateUrl: './depreciation.component.html',
  styleUrl: './depreciation.component.css',
})
export class DepreciationComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawDepreciations = signal<IDepreciation[]>([
    {
      id: 1,
      reference: 'Reference 1',
      fromDate: '2023-01-01',
      toDate: '2023-01-31',
    },
  ]);

  // =====================================================
  // UI STATE
  // =====================================================

  protected readonly searchQuery = signal('');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawDepreciations(),
    totalItems: this.rawDepreciations().length,
  }));

  // =====================================================
  // TABLE
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }
}
