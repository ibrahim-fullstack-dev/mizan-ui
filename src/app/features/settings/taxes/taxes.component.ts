// src/app/features/settings/taxes/taxes.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ITax } from './taxes.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './taxes.constants';

@Component({
  selector: 'app-taxes',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './taxes.component.html',
  styleUrl: './taxes.component.css',
})
export class TaxesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawTaxes = signal<ITax[]>([
    {
      id: 1,
      name: 'VAT',
      rate: 0.1,
      saleAccount: 1,
      purchaseAccount: 2,
    },
    {
      id: 2,
      name: 'GST',
      rate: 0.2,
      saleAccount: 3,
      purchaseAccount: 4,
    },
    {
      id: 3,
      name: 'IRS',
      rate: 0.3,
      saleAccount: 5,
      purchaseAccount: 6,
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
    data: this.rawTaxes(),
    totalItems: this.rawTaxes().length,
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

  protected onTableAction(event: TableActionEvent<ITax>): void {
    switch (event.action) {
      case 'edit':
        this.editTax(event.id);
        break;

      case 'delete':
        this.deleteTax(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ITax['id'][]): void {
    console.log('Selected tax IDs:', selectedIds);
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
    console.log('Open Add Tax form');
  }

  private editTax(id: ITax['id']): void {
    console.log('Edit tax:', id);
  }

  private deleteTax(id: ITax['id']): void {
    this.rawTaxes.update((taxes) => taxes.filter((tax) => tax.id !== id));
  }

  private deleteAll(): void {
    this.rawTaxes.set([]);
  }
}
