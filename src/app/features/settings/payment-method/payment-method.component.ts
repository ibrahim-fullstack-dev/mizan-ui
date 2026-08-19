// src/app/features/settings/payment-method/payment-method.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPaymentMethod } from './payment-method.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './payment-method.constants';

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css',
})
export class PaymentMethodComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPaymentMethods = signal<IPaymentMethod[]>([
    {
      id: 1,
      name: 'PayPal',
      way: 'Credit Card',
      accountName: 'Bank',
    },
    {
      id: 2,
      name: 'PayPal',
      way: 'Credit Card',
      accountName: 'Cash',
    },
    {
      id: 3,
      name: 'PayPal',
      way: 'Credit Card',
      accountName: 'bobsmith@example.com',
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
    data: this.rawPaymentMethods(),
    totalItems: this.rawPaymentMethods().length,
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

  protected onTableAction(event: TableActionEvent<IPaymentMethod>): void {
    switch (event.action) {
      case 'edit':
        this.editPaymentMethod(event.id);
        break;

      case 'delete':
        this.deletePaymentMethod(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IPaymentMethod['id'][]): void {
    console.log('Selected payment method IDs:', selectedIds);
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
    console.log('Open Add Payment Method form');
  }

  private editPaymentMethod(id: IPaymentMethod['id']): void {
    console.log('Edit payment method:', id);
  }

  private deletePaymentMethod(id: IPaymentMethod['id']): void {
    this.rawPaymentMethods.update((methods) => methods.filter((method) => method.id !== id));
  }

  private deleteAll(): void {
    this.rawPaymentMethods.set([]);
  }
}
