// src/app/features/cost-center/projects/projects.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IProject } from './projects.types';

// Constants
import { DATA_PAGE_CONFIG } from './projects.constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProjects = signal<IProject[]>([
    {
      id: 1,
      name: 'Project 1',
      status: 'Active',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IProject>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawProjects(),

      totalItems: this.rawProjects().length,
    },
  }));
}
