// src/app/features/offers/offers.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IOffer } from './offers.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABS,
  TABLE_CONFIG,
} from './offers.constants';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
    data: this.rawOffers(),
    totalItems: this.rawOffers().length,
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

    // Apply offer status filtering here when needed.
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IOffer>): void {
    switch (event.action) {
      case 'view':
        this.viewOffer(event.id);
        break;

      case 'edit':
        this.editOffer(event.id);
        break;

      case 'delete':
        this.deleteOffer(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IOffer['id'][]): void {
    console.log('Selected offer IDs:', selectedIds);
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
    console.log('Open Add Offer form');
  }

  private viewOffer(id: IOffer['id']): void {
    console.log('View offer:', id);
  }

  private editOffer(id: IOffer['id']): void {
    console.log('Edit offer:', id);
  }

  private deleteOffer(id: IOffer['id']): void {
    this.rawOffers.update((offers) => offers.filter((offer) => offer.id !== id));
  }

  private deleteAll(): void {
    this.rawOffers.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting offers to PDF...');
  }
}
