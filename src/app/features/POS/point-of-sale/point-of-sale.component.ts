// src/app/features/POS/point-of-sale/point-of-sale.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IPointOfSale } from './point-of-sale.types';

// Constants
import { DATA_PAGE_CONFIG } from './point-of-sale.constants';

@Component({
  selector: 'app-point-of-sale',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IPointOfSale>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawPointOfSales(),

      totalItems: this.rawPointOfSales().length,
    },
  }));
}
