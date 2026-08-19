// src/app/features/cost-center/projects/projects.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IProject } from './projects.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './projects.constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawProjects(),
    totalItems: this.rawProjects().length,
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

  protected onTableAction(event: TableActionEvent<IProject>): void {
    switch (event.action) {
      case 'view':
        this.viewProject(event.id);
        break;

      case 'edit':
        this.editProject(event.id);
        break;

      case 'delete':
        this.deleteProject(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IProject['id'][]): void {
    console.log('Selected project IDs:', selectedIds);
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
    console.log('Open Add Project form');
  }

  private viewProject(id: IProject['id']): void {
    console.log('View project:', id);
  }

  private editProject(id: IProject['id']): void {
    console.log('Edit project:', id);
  }

  private deleteProject(id: IProject['id']): void {
    this.rawProjects.update((projects) => projects.filter((project) => project.id !== id));
  }

  private deleteAll(): void {
    this.rawProjects.set([]);
  }
}
