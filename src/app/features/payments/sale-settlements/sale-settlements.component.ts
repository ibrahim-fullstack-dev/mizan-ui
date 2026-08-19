// src/app/features/payments/sale-settlements/sale-settlements.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TablePageEvent } from '@components/table/table.types';

import { ISaleSettlement } from './sale-settlements.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, TABLE_CONFIG } from './sale-settlements.constants';

@Component({
  selector: 'app-sale-settlements',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, TableComponent],
  templateUrl: './sale-settlements.component.html',
  styleUrl: './sale-settlements.component.css',
})
export class SaleSettlementsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawSaleSettlements = signal<ISaleSettlement[]>([
    {
      id: 1,
      saleInvoiceNumber: '1234567890',
      saleDate: '2023-01-01',
      settlementDate: '2023-01-01',
      clientName: 'Client A',
      branch: 'Branch 1',
      salesUser: 'User 1',
      settlementUser: 1,
      settlementAmount: 1000,
      invoiceTotal: 1500,
      totalPaid: 500,
      remaining: 500,
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

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawSaleSettlements(),
    totalItems: this.rawSaleSettlements().length,
  }));

  // =====================================================
  // TABLE PAGINATION
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ISaleSettlement['id'][]): void {
    console.log('Selected sale settlement IDs:', selectedIds);
  }
}
