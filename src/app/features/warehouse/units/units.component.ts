// src/app/features/warehouse/units/units.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IUnit } from './units.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './units.constants';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './units.component.html',
  styleUrl: './units.component.css',
})
export class UnitsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawUnits = signal<IUnit[]>([
    {
      id: 1,
      name: 'Unit 1',
      shortName: 'U1',
      useFraction: true,
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
    data: this.rawUnits(),
    totalItems: this.rawUnits().length,
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

  protected onTableAction(event: TableActionEvent<IUnit>): void {
    switch (event.action) {
      case 'view':
        this.viewUnit(event.id);
        break;

      case 'edit':
        this.editUnit(event.id);
        break;

      case 'delete':
        this.deleteUnit(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IUnit['id'][]): void {
    console.log('Selected unit IDs:', selectedIds);
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
    console.log('Open Add Unit form');
  }

  private viewUnit(id: IUnit['id']): void {
    console.log('View unit:', id);
  }

  private editUnit(id: IUnit['id']): void {
    console.log('Edit unit:', id);
  }

  private deleteUnit(id: IUnit['id']): void {
    this.rawUnits.update((units) => units.filter((unit) => unit.id !== id));
  }

  private deleteAll(): void {
    this.rawUnits.set([]);
  }
}
