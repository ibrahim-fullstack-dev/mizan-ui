// src/app/features/warehouse/branches-lists/branches-lists.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IBranchList } from './branches-lists.types';

// Constants
import { DATA_PAGE_CONFIG } from './branches-lists.constants';

@Component({
  selector: 'app-branches-lists',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './branches-lists.component.html',
  styleUrl: './branches-lists.component.css',
})
export class BranchesListsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawBranches = signal<IBranchList[]>([
    {
      id: 1,
      name: 'Branch 1',
      productCount: 10,
      warehouseCount: 5,
    },
    {
      id: 2,
      name: 'Branch 2',
      productCount: 5,
      warehouseCount: 10,
    },
    {
      id: 3,
      name: 'Branch 3',
      productCount: 20,
      warehouseCount: 15,
    },
    {
      id: 4,
      name: 'Branch 4',
      productCount: 15,
      warehouseCount: 25,
    },
    {
      id: 5,
      name: 'Branch 5',
      productCount: 25,
      warehouseCount: 20,
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IBranchList>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawBranches(),

      totalItems: this.rawBranches().length,
    },
  }));
}
