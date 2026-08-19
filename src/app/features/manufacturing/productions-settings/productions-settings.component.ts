// src/app/features/manufacturing/productions-settings/productions-settings.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IProductionSetting } from './productions-settings.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './productions-settings.constant';

@Component({
  selector: 'app-productions-settings',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './productions-settings.component.html',
  styleUrl: './productions-settings.component.css',
})
export class ProductionsSettingsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProductionsSettings = signal<IProductionSetting[]>([
    {
      id: 1,
      name: 'Name 1',
      description: 'Description 1',
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
    data: this.rawProductionsSettings(),
    totalItems: this.rawProductionsSettings().length,
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

      case 'export-pdf':
        this.exportPdf();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IProductionSetting>): void {
    switch (event.action) {
      case 'view':
        this.viewProductionSetting(event.id);
        break;

      case 'edit':
        this.editProductionSetting(event.id);
        break;

      case 'delete':
        this.deleteProductionSetting(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IProductionSetting['id'][]): void {
    console.log('Selected production setting IDs:', selectedIds);
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
    console.log('Open Add Production Setting form');
  }

  private viewProductionSetting(id: IProductionSetting['id']): void {
    console.log('View production setting:', id);
  }

  private editProductionSetting(id: IProductionSetting['id']): void {
    console.log('Edit production setting:', id);
  }

  private deleteProductionSetting(id: IProductionSetting['id']): void {
    this.rawProductionsSettings.update((settings) =>
      settings.filter((setting) => setting.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawProductionsSettings.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting production settings to PDF...');
  }
}
