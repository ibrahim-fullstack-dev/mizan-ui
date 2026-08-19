// src/app/features/warehouse/categories/categories.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ICategory } from './categories.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './categories.constants';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesSettingsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCategories = signal<ICategory[]>([
    {
      id: 1,
      categoryName: 'Category 1',
      code: 1,
      parentCategory: 1,
      description: 'Description 1',
    },
    {
      id: 2,
      categoryName: 'Category 2',
      code: 2,
      parentCategory: 2,
      description: 'Description 2',
    },
    {
      id: 3,
      categoryName: 'Category 3',
      code: 3,
      parentCategory: 3,
      description: 'Description 3',
    },
    {
      id: 4,
      categoryName: 'Category 4',
      code: 4,
      parentCategory: 4,
      description: 'Description 4',
    },
    {
      id: 5,
      categoryName: 'Category 5',
      code: 5,
      parentCategory: 5,
      description: 'Description 5',
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
    data: this.rawCategories(),
    totalItems: this.rawCategories().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add-category':
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

  protected onTableAction(event: TableActionEvent<ICategory>): void {
    switch (event.action) {
      case 'view':
        this.viewCategory(event.id);
        break;

      case 'edit':
        this.editCategory(event.id);
        break;

      case 'delete':
        this.deleteCategory(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ICategory['id'][]): void {
    console.log('Selected category IDs:', selectedIds);
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
    console.log('Open Add Category form');
  }

  private viewCategory(id: ICategory['id']): void {
    console.log('View category:', id);
  }

  private editCategory(id: ICategory['id']): void {
    console.log('Edit category:', id);
  }

  private deleteCategory(id: ICategory['id']): void {
    this.rawCategories.update((categories) => categories.filter((category) => category.id !== id));
  }

  private deleteAll(): void {
    this.rawCategories.set([]);
  }
}
