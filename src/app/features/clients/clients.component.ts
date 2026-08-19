// src/app/features/clients/clients.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { IPageLayoutConfig } from '@shared/components/page-layout/page-layout.types';
import { InputComponent } from '@shared/components/input/input.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { TableComponent } from '@shared/components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { AddFormComponent } from './components/add-form/add-form.component';

import { IClient } from './clients.types';

import { DATA_PAGE_CONFIG, HEADER_BUTTONS, TABLE_CONFIG, SEARCH_INPUT } from './clients.constants';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent, AddFormComponent],
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
  // UI STATE
  // =====================================================

  protected readonly isAddFormOpen = signal(false);
  protected readonly searchQuery = signal('');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig: IPageLayoutConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;
  protected readonly headerButtons = HEADER_BUTTONS;

  // =====================================================
  // TABLE
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawClients(),
    totalItems: this.rawClients().length,
  }));

  protected onTableAction(event: TableActionEvent<IClient>): void {
    switch (event.action) {
      case 'view':
        console.log('View client:', event.id);
        break;

      case 'edit':
        console.log('Edit client:', event.id);
        break;

      case 'delete':
        this.deleteClient(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  protected onTableSelectionChange(selectedIds: IClient['id'][]): void {
    console.log('Selected client IDs:', selectedIds);
  }

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

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
  // ADD FORM VISIBILITY
  // =====================================================

  protected openAddForm(): void {
    this.isAddFormOpen.set(true);
  }

  protected closeAddForm(): void {
    this.isAddFormOpen.set(false);
  }

  // =====================================================
  // OTHER ACTIONS
  // =====================================================

  private deleteClient(id: IClient['id']): void {
    this.rawClients.update((clients) => clients.filter((client) => client.id !== id));
  }

  private deleteAll(): void {
    this.rawClients.set([]);
  }

  private exportPdf(): void {
    console.log('Exporting clients to PDF...');
  }
}
