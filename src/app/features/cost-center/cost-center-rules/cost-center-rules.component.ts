// src/app/features/cost-center/cost-center-rules/cost-center-rules.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ICostCenterRule } from './cost-center-rules.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABS,
  TABLE_CONFIG,
} from './cost-center-rules.constants';

@Component({
  selector: 'app-cost-center-rules',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './cost-center-rules.component.html',
  styleUrl: './cost-center-rules.component.css',
})
export class CostCenterRulesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCostCenterRules = signal<ICostCenterRule[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      clientName: 'Ahmad Omar',
      expiryDate: '2022-01-01',
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      clientName: 'Sara Khalid',
      expiryDate: '2022-01-01',
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      clientName: 'Fahad Suleiman',
      expiryDate: '2022-01-01',
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      clientName: 'Reem Ali',
      expiryDate: '2022-01-01',
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      clientName: 'Yousef Hassan',
      expiryDate: '2022-01-01',
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
  ]);

  // =====================================================
  // UI STATE
  // =====================================================

  protected readonly searchQuery = signal('');
  protected readonly activeTab = signal('all');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tabs = TABS;

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawCostCenterRules(),
    totalItems: this.rawCostCenterRules().length,
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
  // TAB ACTIONS
  // =====================================================

  protected onTabClick(key: string): void {
    this.activeTab.set(key);

    // Apply rule-status filtering here when needed.
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<ICostCenterRule>): void {
    switch (event.action) {
      case 'view':
        this.viewRule(event.id);
        break;

      case 'edit':
        this.editRule(event.id);
        break;

      case 'delete':
        this.deleteRule(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ICostCenterRule['id'][]): void {
    console.log('Selected cost center rule IDs:', selectedIds);
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
    console.log('Open Add Cost Center Rule form');
  }

  private viewRule(id: ICostCenterRule['id']): void {
    console.log('View cost center rule:', id);
  }

  private editRule(id: ICostCenterRule['id']): void {
    console.log('Edit cost center rule:', id);
  }

  private deleteRule(id: ICostCenterRule['id']): void {
    this.rawCostCenterRules.update((rules) => rules.filter((rule) => rule.id !== id));
  }

  private deleteAll(): void {
    this.rawCostCenterRules.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting cost center rules to PDF...');
  }
}
