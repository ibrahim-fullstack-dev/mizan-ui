// src/app/features/orders/sale-orders/sale-orders.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ISaleOrder } from './sale-orders.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABS,
  TABLE_CONFIG,
} from './sale-orders.constants';

@Component({
  selector: 'app-sale-orders',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './sale-orders.component.html',
  styleUrl: './sale-orders.component.css',
})
export class SaleOrdersComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSaleOrders = signal<ISaleOrder[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      clientName: 'Ahmad Omar',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      clientName: 'Sara Khalid',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      clientName: 'Fahad Suleiman',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      clientName: 'Reem Ali',
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      clientName: 'Yousef Hassan',
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
    data: this.rawSaleOrders(),
    totalItems: this.rawSaleOrders().length,
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

    // Apply sale-order status filtering here when needed.
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<ISaleOrder>): void {
    switch (event.action) {
      case 'view':
        this.viewSaleOrder(event.id);
        break;

      case 'edit':
        this.editSaleOrder(event.id);
        break;

      case 'delete':
        this.deleteSaleOrder(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ISaleOrder['id'][]): void {
    console.log('Selected sale order IDs:', selectedIds);
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
    console.log('Open Add Sale Order form');
  }

  private viewSaleOrder(id: ISaleOrder['id']): void {
    console.log('View sale order:', id);
  }

  private editSaleOrder(id: ISaleOrder['id']): void {
    console.log('Edit sale order:', id);
  }

  private deleteSaleOrder(id: ISaleOrder['id']): void {
    this.rawSaleOrders.update((orders) => orders.filter((order) => order.id !== id));
  }

  private deleteAll(): void {
    this.rawSaleOrders.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting sale orders to PDF...');
  }
}
