// src/app/features/settings/roles/roles.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IRole } from './roles.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './roles.constants';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawRoles(),
    totalItems: this.rawRoles().length,
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

  protected onTableAction(event: TableActionEvent<IRole>): void {
    switch (event.action) {
      case 'edit':
        this.editRole(event.id);
        break;

      case 'delete':
        this.deleteRole(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IRole['id'][]): void {
    console.log('Selected role IDs:', selectedIds);
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
    console.log('Open Add Role form');
  }

  private editRole(id: IRole['id']): void {
    console.log('Edit role:', id);
  }

  private deleteRole(id: IRole['id']): void {
    this.rawRoles.update((roles) => roles.filter((role) => role.id !== id));
  }

  private deleteAll(): void {
    this.rawRoles.set([]);
  }
}
