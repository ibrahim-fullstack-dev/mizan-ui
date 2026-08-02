import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IAsset } from './assets.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './assets.constant';
@Component({
  selector: 'app-purchase-payments',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.css',
})
export class AssetsComponent {
  private readonly rawExpenses = signal<IAsset[]>([
    {
      id: 1,
      name: 'Asset 1',
      branch: 'Branch 1',
      assetCategory: 'Category 1',
      ledgerValue: 1000,
      purchaseValue: 1200,
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredAssets = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawExpenses();
    }

    return this.rawExpenses().filter((client) => client.name.toLowerCase().includes(query));
  });

  protected readonly totalClientsCount = computed(() => this.filteredAssets().length);

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
  protected onTableActionTrigger(event: TableActionEvent<IAsset>): void {
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

  protected onRowsSelected(selectedClients: IAsset[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawExpenses.update((current) => current.filter((client) => client.id !== id));
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IAsset): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
