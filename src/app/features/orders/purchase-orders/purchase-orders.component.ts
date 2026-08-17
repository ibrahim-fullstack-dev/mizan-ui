// src/app/features/orders/purchase-orders/purchase-orders.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPurchaseOrder } from './purchase-orders.types';

// Constants
import { DATA_PAGE_CONFIG } from './purchase-orders.constants';

@Component({
  selector: 'app-purchase-orders',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IPurchaseOrder>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPurchaseOrders(),

      totalItems: this.rawPurchaseOrders().length,
    },
  }));
}
