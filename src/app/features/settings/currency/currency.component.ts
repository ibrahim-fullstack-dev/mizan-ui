// src/app/features/settings/currency/currency.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ICurrency } from './currency.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './currency.constants';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCurrencies = signal<ICurrency[]>([
    {
      id: 1,
      name: 'USD',
      ISO: 'USD',
      symbol: '$',
      exchangeRate: 1,
    },
    {
      id: 2,
      name: 'EUR',
      ISO: 'EUR',
      symbol: '€',
      exchangeRate: 0.9,
    },
    {
      id: 3,
      name: 'GBP',
      ISO: 'GBP',
      symbol: '£',
      exchangeRate: 0.8,
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
    data: this.rawCurrencies(),
    totalItems: this.rawCurrencies().length,
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

  protected onTableAction(event: TableActionEvent<ICurrency>): void {
    switch (event.action) {
      case 'edit':
        this.editCurrency(event.id);
        break;

      case 'delete':
        this.deleteCurrency(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ICurrency['id'][]): void {
    console.log('Selected currency IDs:', selectedIds);
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
    console.log('Open Add Currency form');
  }

  private editCurrency(id: ICurrency['id']): void {
    console.log('Edit currency:', id);
  }

  private deleteCurrency(id: ICurrency['id']): void {
    this.rawCurrencies.update((currencies) => currencies.filter((currency) => currency.id !== id));
  }

  private deleteAll(): void {
    this.rawCurrencies.set([]);
  }
}
