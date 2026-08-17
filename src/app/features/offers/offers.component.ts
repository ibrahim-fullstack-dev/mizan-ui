// src/app/features/offers/offers.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IOffer } from './offers.types';

// Constants
import { DATA_PAGE_CONFIG } from './offers.constants';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
})
export class OffersComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawOffers = signal<IOffer[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      clientName: 'Ahmad Omar',
      expiryDate: '2022-01-01',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345679',
      clientName: 'Sara Khalid',
      expiryDate: '2022-01-01',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345680',
      clientName: 'Fahad Suleiman',
      expiryDate: '2022-01-01',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345681',
      clientName: 'Reem Ali',
      expiryDate: '2022-01-01',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345682',
      clientName: 'Yousef Hassan',
      expiryDate: '2022-01-01',
      totalAmount: 100,
      balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IOffer>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawOffers(),

      totalItems: this.rawOffers().length,
    },
  }));
}
