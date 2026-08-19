// src/app/features/settings/tickets/tickets.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ITicket } from './tickets.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './tickets.constants';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawTickets = signal<ITicket[]>([
    {
      id: 1,
      subject: 'University of California',
      email: 'mohamed@gmail.com',
      category: 'Tax',
      status: 'Approved',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
    {
      id: 2,
      subject: 'University of California',
      email: 'mohamed@gmail.com',
      category: 'Tax',
      status: 'Approved',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
    {
      id: 3,
      subject: 'University of California',
      email: 'mohamed@gmail.com',
      category: 'Tax',
      status: 'Approved',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    },
    {
      id: 4,
      subject: 'University of California',
      email: 'mohamed@gmail.com',
      category: 'Tax',
      status: 'Approved',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
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
    data: this.rawTickets(),
    totalItems: this.rawTickets().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add':
        this.openAddForm();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<ITicket>): void {
    switch (event.action) {
      case 'edit':
        this.editTicket(event.id);
        break;

      case 'delete':
        this.deleteTicket(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ITicket['id'][]): void {
    console.log('Selected ticket IDs:', selectedIds);
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
    console.log('Open Add Ticket form');
  }

  private editTicket(id: ITicket['id']): void {
    console.log('Edit ticket:', id);
  }

  private deleteTicket(id: ITicket['id']): void {
    this.rawTickets.update((tickets) => tickets.filter((ticket) => ticket.id !== id));
  }
}
