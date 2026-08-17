// src/app/features/clients/clients.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IClient } from './clients.types';

// Constants
import { DATA_PAGE_CONFIG } from './clients.constants';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawClients = signal<IClient[]>([
    {
      id: 1,
      name: 'Ahmad Omar',
      email: 'ahmad@example.com',
      contact: '+967 12345678',
    },
    {
      id: 2,
      name: 'Sara Khalid',
      email: 'sara@example.com',
      contact: '+967 98765432',
    },
    {
      id: 3,
      name: 'Fahad Suleiman',
      email: 'fahad@example.com',
      contact: '+967 98765432',
    },
    {
      id: 4,
      name: 'Reem Ali',
      email: 'reem@example.com',
      contact: '+967 98765432',
    },
    {
      id: 5,
      name: 'Yousef Hassan',
      email: 'yousef@example.com',
      contact: '+967 12345678',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IClient>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawClients(),

      totalItems: this.rawClients().length,
    },
  }));
}
