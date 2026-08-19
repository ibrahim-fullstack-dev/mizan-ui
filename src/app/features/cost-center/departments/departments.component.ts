// src/app/features/departments/departments.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IDepartment } from './departments.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './departments.constants';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawDepartments(),
    totalItems: this.rawDepartments().length,
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

  protected onTableAction(event: TableActionEvent<IDepartment>): void {
    switch (event.action) {
      case 'view':
        this.viewDepartment(event.id);
        break;

      case 'edit':
        this.editDepartment(event.id);
        break;

      case 'delete':
        this.deleteDepartment(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IDepartment['id'][]): void {
    console.log('Selected department IDs:', selectedIds);
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
    console.log('Open Add Department form');
  }

  private viewDepartment(id: IDepartment['id']): void {
    console.log('View department:', id);
  }

  private editDepartment(id: IDepartment['id']): void {
    console.log('Edit department:', id);
  }

  private deleteDepartment(id: IDepartment['id']): void {
    this.rawDepartments.update((departments) =>
      departments.filter((department) => department.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawDepartments.set([]);
  }
}
