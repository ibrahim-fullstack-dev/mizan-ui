// src/app/features/settings/users/users.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IUser } from './users.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './users.constants';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
  // UI STATE
  // =====================================================

  protected readonly searchQuery = signal('');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;
  protected readonly headerButtons = HEADER_BUTTONS;

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawUsers(),
    totalItems: this.rawUsers().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add':
        this.openAddForm();
        break;

      case 'delete-all':
        this.deleteAll();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IUser>): void {
    switch (event.action) {
      case 'view':
        this.viewUser(event.id);
        break;

      case 'edit':
        this.editUser(event.id);
        break;

      case 'delete':
        this.deleteUser(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IUser['id'][]): void {
    console.log('Selected user IDs:', selectedIds);
  }

  // =====================================================
  // TABLE PAGINATION
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // ACTIONS
  // =====================================================

  private openAddForm(): void {
    console.log('Open Add User form');
  }

  private viewUser(id: IUser['id']): void {
    console.log('View user:', id);
  }

  private editUser(id: IUser['id']): void {
    console.log('Edit user:', id);
  }

  private deleteUser(id: IUser['id']): void {
    this.rawUsers.update((users) => users.filter((user) => user.id !== id));
  }

  private deleteAll(): void {
    this.rawUsers.set([]);
  }
}
