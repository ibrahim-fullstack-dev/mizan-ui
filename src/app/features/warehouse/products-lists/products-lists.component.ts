import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IProductsList } from './products-list.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './products-list.constant';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './products-lists.component.html',
  styleUrl: './products-lists.component.css',
})
export class ProductsListsComponent {
  private readonly rawClients = signal<IProductsList[]>([
    {
      id: 1,
      name: 'Camera',
      type: 'Camera',
      stock: 10,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 1000,
    },
    {
      id: 2,
      name: 'Bike',
      type: 'Bike',
      stock: 5,
      category: 'Sports',
      sku: '987654321',
      defaultSalePrice: 500,
    },
    {
      id: 3,
      name: 'Phone',
      type: 'Phone',
      stock: 20,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 800,
    },
    {
      id: 4,
      name: 'Laptop',
      type: 'Laptop',
      stock: 15,
      category: 'Electronics',
      sku: '987654321',
      defaultSalePrice: 600,
    },
    {
      id: 5,
      name: 'Monitor',
      type: 'Monitor',
      stock: 25,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 1200,
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredProducts = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawClients();
    }

    return this.rawClients().filter((client) => client.name.toLowerCase().includes(query));
  });

  protected readonly totalClientsCount = computed(() => this.filteredProducts().length);

  // 5️⃣ معالجات أفعال الشريط العلوي (PageHeader Actions Dispatcher)
  protected onHeaderAction(key: any): void {
    switch (key) {
      case 'add-product':
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
  protected onTableActionTrigger(event: TableActionEvent<IProductsList>): void {
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

  protected onRowsSelected(selectedClients: IProductsList[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawClients.update((current) => current.filter((client) => client.id !== id));
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IProductsList): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
