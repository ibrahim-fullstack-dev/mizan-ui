// src/app/features/warehouse/transfer-orders/transfer-orders.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ITransferOrder } from './transfer-orders.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './transfer-orders.constants';

@Component({
  selector: 'app-transfer-orders',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './transfer-orders.component.html',
  styleUrl: './transfer-orders.component.css',
})
export class TransferOrdersComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawTransferOrders = signal<ITransferOrder[]>([
    {
      id: 1,
      referenceName: 'Transfer Order 1',
      sourceBranch: 'Branch 1',
      DestinationBranch: 'Branch 2',
      sourceWarehouse: 'Warehouse 1',
      destinationWarehouse: 'Warehouse 2',
      totalQuantity: 10,
      status: 'Pending',
      transferDate: new Date(),
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
    data: this.rawTransferOrders(),
    totalItems: this.rawTransferOrders().length,
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

  protected onTableAction(event: TableActionEvent<ITransferOrder>): void {
    switch (event.action) {
      case 'view':
        this.viewTransferOrder(event.id);
        break;

      case 'edit':
        this.editTransferOrder(event.id);
        break;

      case 'delete':
        this.deleteTransferOrder(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ITransferOrder['id'][]): void {
    console.log('Selected transfer order IDs:', selectedIds);
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
    console.log('Open Add Transfer Order form');
  }

  private viewTransferOrder(id: ITransferOrder['id']): void {
    console.log('View transfer order:', id);
  }

  private editTransferOrder(id: ITransferOrder['id']): void {
    console.log('Edit transfer order:', id);
  }

  private deleteTransferOrder(id: ITransferOrder['id']): void {
    this.rawTransferOrders.update((orders) => orders.filter((order) => order.id !== id));
  }

  private deleteAll(): void {
    this.rawTransferOrders.set([]);
  }
}
