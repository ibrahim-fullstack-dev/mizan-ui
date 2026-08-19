// src/app/features/warehouse/branches-lists/branches-lists.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IBranchList } from './branches-lists.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './branches-lists.constants';

@Component({
  selector: 'app-branches-lists',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawBranches(),
    totalItems: this.rawBranches().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add-branch':
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

  protected onTableAction(event: TableActionEvent<IBranchList>): void {
    switch (event.action) {
      case 'view':
        this.viewBranch(event.id);
        break;

      case 'edit':
        this.editBranch(event.id);
        break;

      case 'delete':
        this.deleteBranch(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IBranchList['id'][]): void {
    console.log('Selected branch IDs:', selectedIds);
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
    console.log('Open Add Branch form');
  }

  private viewBranch(id: IBranchList['id']): void {
    console.log('View branch:', id);
  }

  private editBranch(id: IBranchList['id']): void {
    console.log('Edit branch:', id);
  }

  private deleteBranch(id: IBranchList['id']): void {
    this.rawBranches.update((branches) => branches.filter((branch) => branch.id !== id));
  }

  private deleteAll(): void {
    this.rawBranches.set([]);
  }
}
