import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IBillsInvoices } from './sales-invoices.types';

// 📐 constants
import {
  TABLE_COLUMNS,
  HEADER_BUTTONS,
  TABLE_ACTIONS,
  PAGE_NAVIGATION_BUTTONS,
} from './sales-invoices.constant';
@Component({
  selector: 'app-sales-invoices',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    InputComponent,
    TableComponent,
    LucideAngularModule,
    ButtonComponent,
  ],
  templateUrl: './sales-invoices-list.component.html',
  styleUrl: './sales-invoices-list.component.css',
})
export class SalesInvoicesListComponent {
  private readonly rawBillsInvoices = signal<IBillsInvoices[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      clientName: 'Ahmad Omar',
      totalAmount: 100,
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345678',
      clientName: 'Sara Khalid',
      totalAmount: 100,
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345678',
      clientName: 'Fahad Suleiman',
      totalAmount: 100,
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345678',
      clientName: 'Reem Ali',
      totalAmount: 100,
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345678',
      clientName: 'Yousef Hassan',
      totalAmount: 100,
      Balance: 100,
      status: 'Unpaid',
      date: '2022-01-01',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;
  protected readonly pageNavigationButtons = PAGE_NAVIGATION_BUTTONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredBillsInvoices = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawBillsInvoices();
    }

    return this.rawBillsInvoices().filter((billsInvoices) =>
      billsInvoices.clientName.toLowerCase().includes(query),
    );
  });

  protected readonly totalBillsInvoicesCount = computed(() => this.filteredBillsInvoices().length);

  // 5️⃣ معالجات أفعال الشريط العلوي (PageHeader Actions Dispatcher)
  protected onHeaderAction(key: any): void {
    switch (key) {
      case 'add-client':
        this.openAddClientModal();
        break;
      case 'export-pdf':
        this.exportClients();
        break;
      default:
        console.warn(`Unhandled action key: ${key}`);
    }
  }

  // 6️⃣ معالجات أفعال الجدول (Table Event Handlers)
  protected onTableActionTrigger(event: TableActionEvent<IBillsInvoices>): void {
    const client = event.row;

    switch (event.action) {
      case 'delete':
        this.deleteClient(client.id);
        break;
      case 'edit':
        this.openEditClientModal(client);
        break;
    }
  }

  onPageNavigationItemClick(key: string): void {
    console.log('Page navigation item clicked:', key);
  }

  protected onRowsSelected(selectedClients: IBillsInvoices[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawBillsInvoices.update((current) => current.filter((client) => client.id !== id));
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IBillsInvoices): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
