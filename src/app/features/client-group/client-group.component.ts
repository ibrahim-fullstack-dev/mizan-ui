// src/app/features/client-group/client-group.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IClientGroup } from './client-group.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './client-group.constants';

@Component({
  selector: 'app-client-group',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './client-group.component.html',
  styleUrl: './client-group.component.css',
})
export class ClientGroupComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawClientGroups = signal<IClientGroup[]>([
    {
      id: 1,
      name: 'General Office',
      type: 'Company',
      priceListValue: '1000',
      percentage: '10',
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
    data: this.rawClientGroups(),
    totalItems: this.rawClientGroups().length,
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

  protected onTableAction(event: TableActionEvent<IClientGroup>): void {
    switch (event.action) {
      case 'view':
        this.viewClientGroup(event.id);
        break;

      case 'edit':
        this.editClientGroup(event.id);
        break;

      case 'delete':
        this.deleteClientGroup(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IClientGroup['id'][]): void {
    console.log('Selected client group IDs:', selectedIds);
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
    console.log('Open Add Client Group form');
  }

  private viewClientGroup(id: IClientGroup['id']): void {
    console.log('View client group:', id);
  }

  private editClientGroup(id: IClientGroup['id']): void {
    console.log('Edit client group:', id);
  }

  private deleteClientGroup(id: IClientGroup['id']): void {
    this.rawClientGroups.update((groups) => groups.filter((group) => group.id !== id));
  }

  private deleteAll(): void {
    this.rawClientGroups.set([]);
  }
}
