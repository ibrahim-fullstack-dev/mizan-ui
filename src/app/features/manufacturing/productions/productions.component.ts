// src/app/features/manufacturing/productions/productions.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IProduction } from './productions.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './productions.constants';

@Component({
  selector: 'app-productions',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './productions.component.html',
  styleUrl: './productions.component.css',
})
export class ProductionsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProductions = signal<IProduction[]>([
    {
      id: 1,
      operatingNumber: '12345678',
      ManufacturingEquationName: 'ManufacturingEquationName 1',
      productionDate: '2022-01-01',
      fromBranch: 'fromBranch 1',
      toBranch: 'toBranch 1',
      toWarehouse: 'toWarehouse 1',
      quantity: 10,
      unitPrice: 100,
      totalPrice: 1000,
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
    data: this.rawProductions(),
    totalItems: this.rawProductions().length,
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

  protected onTableAction(event: TableActionEvent<IProduction>): void {
    switch (event.action) {
      case 'view':
        this.viewProduction(event.id);
        break;

      case 'edit':
        this.editProduction(event.id);
        break;

      case 'delete':
        this.deleteProduction(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IProduction['id'][]): void {
    console.log('Selected production IDs:', selectedIds);
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
    console.log('Open Add Production form');
  }

  private viewProduction(id: IProduction['id']): void {
    console.log('View production:', id);
  }

  private editProduction(id: IProduction['id']): void {
    console.log('Edit production:', id);
  }

  private deleteProduction(id: IProduction['id']): void {
    this.rawProductions.update((productions) =>
      productions.filter((production) => production.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawProductions.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting productions to PDF...');
  }
}
