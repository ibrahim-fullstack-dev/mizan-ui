// src/app/features/settings/users/users.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IUser } from './users.types';

// Constants
import { DATA_PAGE_CONFIG } from './users.constants';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawUsers = signal<IUser[]>([
    {
      id: 1,
      name: 'John Doe',
      userName: 'johndoe',
      email: 'johndoe@example.com',
      phone: '+1 (555) 555-5555',
      type: 'Client',
      role: 'Admin',
      lastLogin: '2023-01-01',
    },
    {
      id: 2,
      name: 'Jane Doe',
      userName: 'janedoe',
      email: 'janedoe@example.com',
      phone: '+1 (555) 555-5555',
      type: 'Client',
      role: 'Admin',
      lastLogin: '2023-01-02',
    },
    {
      id: 3,
      name: 'Bob Smith',
      userName: 'bobsmith',
      email: 'bobsmith@example.com',
      phone: '+1 (555) 555-5555',
      type: 'Client',
      role: 'Admin',
      lastLogin: '2023-01-03',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IUser>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawUsers(),

      totalItems: this.rawUsers().length,
    },
  }));
}
