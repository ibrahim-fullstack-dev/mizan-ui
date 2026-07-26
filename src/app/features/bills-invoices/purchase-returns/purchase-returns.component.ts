import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IPurchaseReturns } from './purchase-returns.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './purchase-returns.constant';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './purchase-returns.component.html',
  styleUrl: './purchase-returns.component.css',
})
export class PurchaseReturnsComponent {
  private readonly rawPurchaseReturns = signal<IPurchaseReturns[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      purchaseInvoiceNumber: '12345678',
      SupplierName: 'Ahmad Omar',
      BranchName: 'Ahmad Omar',
      TotalPrice: 100,
      Balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345678',
      purchaseInvoiceNumber: '12345678',
      SupplierName: 'Sara Khalid',
      BranchName: 'Sara Khalid',
      TotalPrice: 100,
      Balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345678',
      purchaseInvoiceNumber: '12345678',
      SupplierName: 'Fahad Suleiman',
      BranchName: 'Fahad Suleiman',
      TotalPrice: 100,
      Balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345678',
      purchaseInvoiceNumber: '12345678',
      SupplierName: 'Reem Ali',
      BranchName: 'Reem Ali',
      TotalPrice: 100,
      Balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345678',
      purchaseInvoiceNumber: '12345678',
      SupplierName: 'Yousef Hassan',
      BranchName: 'Yousef Hassan',
      TotalPrice: 100,
      Balance: 100,
      status: 'Unpaid',
      returnDate: '2022-01-01',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredPurchaseReturns = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawPurchaseReturns();
    }

    return this.rawPurchaseReturns().filter((purchaseReturns) =>
      purchaseReturns.SupplierName.toLowerCase().includes(query),
    );
  });

  protected readonly totalClientsCount = computed(() => this.filteredPurchaseReturns().length);

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
  protected onTableActionTrigger(event: TableActionEvent<IPurchaseReturns>): void {
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

  protected onRowsSelected(selectedClients: IPurchaseReturns[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawPurchaseReturns.update((current) => current.filter((supplier) => supplier.id !== id));
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IPurchaseReturns): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
