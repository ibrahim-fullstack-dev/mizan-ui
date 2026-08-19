// src/app/features/POS/point-of-sale/point-of-sale.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPointOfSale } from './point-of-sale.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './point-of-sale.constants';

@Component({
  selector: 'app-point-of-sale',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './point-of-sale.component.html',
  styleUrl: './point-of-sale.component.css',
})
export class PointOfSaleComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPointOfSales = signal<IPointOfSale[]>([
    {
      id: 1,
      code: '12345678',
      reference: '12345678',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Ahmad Omar',
      warehouseName: 'Ahmad Omar',
      date: '2022-01-01',
      status: 'Unpaid',
    },
    {
      id: 2,
      code: '123456789',
      reference: '123456789',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Sara Khalid',
      warehouseName: 'Sara Khalid',
      date: '2022-01-01',
      status: 'Unpaid',
    },
    {
      id: 3,
      code: '123456788',
      reference: '123456788',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Fahad Suleiman',
      warehouseName: 'Fahad Suleiman',
      date: '2022-01-01',
      status: 'Unpaid',
    },
    {
      id: 4,
      code: '123456787',
      reference: '123456787',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Reem Ali',
      warehouseName: 'Reem Ali',
      date: '2022-01-01',
      status: 'Unpaid',
    },
    {
      id: 5,
      code: '123456786',
      reference: '123456786',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Yousef Hassan',
      warehouseName: 'Yousef Hassan',
      date: '2022-01-01',
      status: 'Unpaid',
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
    data: this.rawPointOfSales(),
    totalItems: this.rawPointOfSales().length,
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

  protected onTableAction(event: TableActionEvent<IPointOfSale>): void {
    switch (event.action) {
      case 'edit':
        this.editPointOfSale(event.id);
        break;

      case 'delete':
        this.deletePointOfSale(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IPointOfSale['id'][]): void {
    console.log('Selected point-of-sale IDs:', selectedIds);
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
    console.log('Open Add Point of Sale form');
  }

  private editPointOfSale(id: IPointOfSale['id']): void {
    console.log('Edit point of sale:', id);
  }

  private deletePointOfSale(id: IPointOfSale['id']): void {
    this.rawPointOfSales.update((pointsOfSale) =>
      pointsOfSale.filter((pointOfSale) => pointOfSale.id !== id),
    );
  }

  private deleteAll(): void {
    this.rawPointOfSales.set([]);
  }
}
