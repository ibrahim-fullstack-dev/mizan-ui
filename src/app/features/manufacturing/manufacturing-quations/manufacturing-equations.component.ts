// src/app/features/manufactures/manufacturing-equations/manufacturing-equations.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IManufacturingEquation } from './manufacturing-equations.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './manufacturing-equations.constants';

@Component({
  selector: 'app-manufacturing-equations',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './manufacturing-equations.component.html',
  styleUrl: './manufacturing-equations.component.css',
})
export class ManufacturingEquationsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawManufacturingEquations = signal<IManufacturingEquation[]>([
    {
      id: 1,
      name: 'Name 1',
      manufacturingType: 'Manufacturing Type 1',
      product: 'Product 1',
      productType: 'Product Type 1',
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
    data: this.rawManufacturingEquations(),
    totalItems: this.rawManufacturingEquations().length,
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

  protected onTableAction(event: TableActionEvent<IManufacturingEquation>): void {
    switch (event.action) {
      case 'view':
        this.viewManufacturingEquation(event.id);
        break;

      case 'edit':
        this.editManufacturingEquation(event.id);
        break;

      case 'delete':
        this.deleteManufacturingEquation(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IManufacturingEquation['id'][]): void {
    console.log('Selected manufacturing equation IDs:', selectedIds);
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
    console.log('Open Add Manufacturing Equation form');
  }

  private viewManufacturingEquation(id: IManufacturingEquation['id']): void {
    console.log('View manufacturing equation:', id);
  }

  private editManufacturingEquation(id: IManufacturingEquation['id']): void {
    console.log('Edit manufacturing equation:', id);
  }

  private deleteManufacturingEquation(id: IManufacturingEquation['id']): void {
    this.rawManufacturingEquations.update((equations) =>
      equations.filter((equation) => equation.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawManufacturingEquations.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting manufacturing equations to PDF...');
  }
}
