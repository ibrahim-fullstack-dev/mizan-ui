// src/app/features/number-group/number-group.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { INumberGroup } from './number-group.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './number-group.constants';

@Component({
  selector: 'app-number-group',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawNumberGroups(),
    totalItems: this.rawNumberGroups().length,
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

  protected onTableAction(event: TableActionEvent<INumberGroup>): void {
    switch (event.action) {
      case 'edit':
        this.editNumberGroup(event.id);
        break;

      case 'delete':
        this.deleteNumberGroup(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: INumberGroup['id'][]): void {
    console.log('Selected number group IDs:', selectedIds);
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
    console.log('Open Add Number Group form');
  }

  private editNumberGroup(id: INumberGroup['id']): void {
    console.log('Edit number group:', id);
  }

  private deleteNumberGroup(id: INumberGroup['id']): void {
    this.rawNumberGroups.update((groups) => groups.filter((group) => group.id !== id));
  }

  private deleteAll(): void {
    this.rawNumberGroups.set([]);
  }
}
