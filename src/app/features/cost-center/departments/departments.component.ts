// src/app/features/cost-center/departments/departments.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IDepartment } from './departments.types';

// Constants
import { DATA_PAGE_CONFIG } from './departments.constants';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css',
})
export class DepartmentsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawDepartments = signal<IDepartment[]>([
    {
      id: 1,
      name: 'Department 1',
      status: 'active',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IDepartment>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawDepartments(),

      totalItems: this.rawDepartments().length,
    },
  }));
}
