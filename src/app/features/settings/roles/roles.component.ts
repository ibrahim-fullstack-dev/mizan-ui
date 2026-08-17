// src/app/features/settings/roles/roles.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IRole } from './roles.types';

// Constants
import { DATA_PAGE_CONFIG } from './roles.constants';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawRoles = signal<IRole[]>([
    {
      id: 1,
      roleName: 'Admin',
      permissions: 'Manage Users, Manage Roles',
    },
    {
      id: 2,
      roleName: 'User',
      permissions: 'Manage Users',
    },
    {
      id: 3,
      roleName: 'Guest',
      permissions: 'View Users',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IRole>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawRoles(),

      totalItems: this.rawRoles().length,
    },
  }));
}
