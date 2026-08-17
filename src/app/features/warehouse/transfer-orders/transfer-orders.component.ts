// src/app/features/warehouse/transfer-orders/transfer-orders.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ITransferOrder } from './transfer-orders.types';

// Constants
import { DATA_PAGE_CONFIG } from './transfer-orders.constants';

@Component({
  selector: 'app-transfer-orders',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ITransferOrder>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawTransferOrders(),

      totalItems: this.rawTransferOrders().length,
    },
  }));
}
