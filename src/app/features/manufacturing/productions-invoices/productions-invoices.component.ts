import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IProductionInvoice } from './productions-invoices.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './productions-invoices.constant';
@Component({
  selector: 'app-sales-invoices',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './productions-invoices.component.html',
  styleUrl: './productions-invoices.component.css',
})
export class ProductionsInvoicesComponent {
  private readonly rawProductionsInvoices = signal<IProductionInvoice[]>([
    {
      id: 1,
      invoiceNumber: 'INV-0001',
      ProductionProductName: 'Product 1',
      branch: 'Branch 1',
      warehouse: 'Warehouse 1',
      date: '2023-01-01',
      totalPrice: 1000,
    },
    {
      id: 2,
      invoiceNumber: 'INV-0002',
      ProductionProductName: 'Product 2',
      branch: 'Branch 2',
      warehouse: 'Warehouse 2',
      date: '2023-01-02',
      totalPrice: 2000,
    },
    {
      id: 3,
      invoiceNumber: 'INV-0003',
      ProductionProductName: 'Product 3',
      branch: 'Branch 3',
      warehouse: 'Warehouse 3',
      date: '2023-01-03',
      totalPrice: 3000,
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredProductionsInvoices = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawProductionsInvoices();
    }

    return this.rawProductionsInvoices().filter((offers) =>
      offers.ProductionProductName.toLowerCase().includes(query),
    );
  });

  protected readonly totalBillsInvoicesCount = computed(
    () => this.filteredProductionsInvoices().length,
  );

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
  protected onTableActionTrigger(event: TableActionEvent<IProductionInvoice>): void {
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

  protected onRowsSelected(selectedClients: IProductionInvoice[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawProductionsInvoices.update((current) => current.filter((client) => client.id !== id));
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IProductionInvoice): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
