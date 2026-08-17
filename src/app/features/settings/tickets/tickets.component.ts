// src/app/features/settings/tickets/tickets.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ITicket } from './tickets.types';

// Constants
import { DATA_PAGE_CONFIG } from './tickets.constants';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ITicket>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawTickets(),

      totalItems: this.rawTickets().length,
    },
  }));
}
