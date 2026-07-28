import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IWarehouse } from './warehouses.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './warehouses.constant';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.css',
})
export class WarehousesComponent {
  private readonly rawBranches = signal<IWarehouse[]>([
    {
      id: 1,
      name: 'warehouse 1',
      branch: 'Branch 1',
      address: 'Address 1',
      productCount: 10,
    },
    {
      id: 2,
      name: 'warehouse 2',
      branch: 'Branch 2',
      address: 'Address 2',
      productCount: 5,
    },
    {
      id: 3,
      name: 'warehouse 3',
      branch: 'Branch 3',
      address: 'Address 3',
      productCount: 20,
    },
    {
      id: 4,
      name: 'warehouse 4',
      branch: 'Branch 4',
      address: 'Address 4',
      productCount: 15,
    },
    {
      id: 5,
      name: 'warehouse 5',
      branch: 'Branch 5',
      address: 'Address 5',
      productCount: 25,
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredBranches = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawBranches();
    }

    return this.rawBranches().filter((branch) => branch.name.toLowerCase().includes(query));
  });

  protected readonly totalClientsCount = computed(() => this.filteredBranches().length);

  // 5️⃣ معالجات أفعال الشريط العلوي (PageHeader Actions Dispatcher)
  protected onHeaderAction(key: any): void {
    switch (key) {
      case 'add-product':
        this.openAddBranchModal();
        break;
      case 'export-pdf':
        this.exportBranches();
        break;
      default:
        console.warn(`Unhandled action key: ${key}`);
    }
  }

  // 6️⃣ معالجات أفعال الجدول (Table Event Handlers)
  protected onTableActionTrigger(event: TableActionEvent<IWarehouse>): void {
    const client = event.row;

    switch (event.action) {
      case 'delete':
        this.deleteBranch(client.id);
        break;
      case 'edit':
        this.openEditBranchModal(client);
        break;
    }
  }

  protected onRowsSelected(selectedClients: IWarehouse[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteBranch(id: number): void {
    this.rawBranches.update((current) => current.filter((branch) => branch.id !== id));
  }

  private openAddBranchModal(): void {
    console.log('Opening Add Branch Modal...');
  }

  private openEditBranchModal(client: IWarehouse): void {
    console.log('Opening Edit Branch Modal for:', client);
  }

  private exportBranches(): void {
    console.log('Exporting Branch list to PDF...');
  }
}
