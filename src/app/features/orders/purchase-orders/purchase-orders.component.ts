// src/app/features/orders/purchase-orders/purchase-orders.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPurchaseOrder } from './purchase-orders.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABS,
  TABLE_CONFIG,
} from './purchase-orders.constants';

@Component({
  selector: 'app-purchase-orders',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './purchase-orders.component.html',
  styleUrl: './purchase-orders.component.css',
})
export class PurchaseOrdersComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPurchaseOrders = signal<IPurchaseOrder[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      supplierName: 'Ahmad Omar',
      BranchName: 'Ahmad Omar',
      warehouseName: 'Ahmad Omar',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '123456789',
      supplierName: 'Sara Khalid',
      BranchName: 'Sara Khalid',
      warehouseName: 'Sara Khalid',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '123456788',
      supplierName: 'Fahad Suleiman',
      BranchName: 'Fahad Suleiman',
      warehouseName: 'Fahad Suleiman',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '123456787',
      supplierName: 'Reem Ali',
      BranchName: 'Reem Ali',
      warehouseName: 'Reem Ali',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '123456786',
      supplierName: 'Yousef Hassan',
      BranchName: 'Yousef Hassan',
      warehouseName: 'Yousef Hassan',
      Balance: 100,
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
    data: this.rawPurchaseOrders(),
    totalItems: this.rawPurchaseOrders().length,
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

    // Apply purchase-order status filtering here when needed.
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IPurchaseOrder>): void {
    switch (event.action) {
      case 'view':
        this.viewPurchaseOrder(event.id);
        break;

      case 'edit':
        this.editPurchaseOrder(event.id);
        break;

      case 'delete':
        this.deletePurchaseOrder(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IPurchaseOrder['id'][]): void {
    console.log('Selected purchase order IDs:', selectedIds);
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
    console.log('Open Add Purchase Order form');
  }

  private viewPurchaseOrder(id: IPurchaseOrder['id']): void {
    console.log('View purchase order:', id);
  }

  private editPurchaseOrder(id: IPurchaseOrder['id']): void {
    console.log('Edit purchase order:', id);
  }

  private deletePurchaseOrder(id: IPurchaseOrder['id']): void {
    this.rawPurchaseOrders.update((orders) => orders.filter((order) => order.id !== id));
  }

  private deleteAll(): void {
    this.rawPurchaseOrders.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting purchase orders to PDF...');
  }
}
