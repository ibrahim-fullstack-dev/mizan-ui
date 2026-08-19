// src/app/features/settings/payment-fees/payment-fees.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IPaymentFee } from './payment-fees.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './payment-fees.constants';

@Component({
  selector: 'app-payment-fees',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './payment-fees.component.html',
  styleUrl: './payment-fees.component.css',
})
export class PaymentFeesComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawPaymentFees = signal<IPaymentFee[]>([
    {
      id: 1,
      name: 'PayPal',
      expenseCategory: 'Food',
      amount: 100,
    },
    {
      id: 2,
      name: 'PayPal',
      expenseCategory: 'Food',
      amount: 100,
    },
    {
      id: 3,
      name: 'PayPal',
      expenseCategory: 'Food',
      amount: 100,
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
    data: this.rawPaymentFees(),
    totalItems: this.rawPaymentFees().length,
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

  protected onTableAction(event: TableActionEvent<IPaymentFee>): void {
    switch (event.action) {
      case 'edit':
        this.editPaymentFee(event.id);
        break;

      case 'delete':
        this.deletePaymentFee(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IPaymentFee['id'][]): void {
    console.log('Selected payment fee IDs:', selectedIds);
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
    console.log('Open Add Payment Fee form');
  }

  private editPaymentFee(id: IPaymentFee['id']): void {
    console.log('Edit payment fee:', id);
  }

  private deletePaymentFee(id: IPaymentFee['id']): void {
    this.rawPaymentFees.update((fees) => fees.filter((fee) => fee.id !== id));
  }

  private deleteAll(): void {
    this.rawPaymentFees.set([]);
  }
}
