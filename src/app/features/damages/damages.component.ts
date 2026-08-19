// src/app/features/damages/damages.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IDamage } from './damages.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './damages.constants';

@Component({
  selector: 'app-damages',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './damages.component.html',
  styleUrl: './damages.component.css',
})
export class DamagesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawDamages = signal<IDamage[]>([
    {
      id: 1,
      referenceNumber: '123456789',
      name: 'Damage 1',
      branch: 'Branch 1',
      warehouse: 'Warehouse 1',
      totalAmountRecovered: 100,
      date: '2023-01-01',
      notes: 'Damage notes 1',
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
    data: this.rawDamages(),
    totalItems: this.rawDamages().length,
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

  protected onTableAction(event: TableActionEvent<IDamage>): void {
    switch (event.action) {
      case 'view':
        this.viewDamage(event.id);
        break;

      case 'edit':
        this.editDamage(event.id);
        break;

      case 'delete':
        this.deleteDamage(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IDamage['id'][]): void {
    console.log('Selected damage IDs:', selectedIds);
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
    console.log('Open Add Damage form');
  }

  private viewDamage(id: IDamage['id']): void {
    console.log('View damage:', id);
  }

  private editDamage(id: IDamage['id']): void {
    console.log('Edit damage:', id);
  }

  private deleteDamage(id: IDamage['id']): void {
    this.rawDamages.update((damages) => damages.filter((damage) => damage.id !== id));
  }

  private deleteAll(): void {
    this.rawDamages.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting damages to PDF...');
  }
}
