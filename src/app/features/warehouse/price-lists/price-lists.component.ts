import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IBranchesList } from './price-lists.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './price-lists.constant';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './price-lists.component.html',
  styleUrl: './price-lists.component.css',
})
export class PriceListsComponent {
  private readonly rawPrices = signal<IBranchesList[]>([
    {
      id: 1,
      name: 'price 1',
      description: 'description 1',
    },
    {
      id: 2,
      name: 'price 2',
      description: 'description 2',
    },
    {
      id: 3,
      name: 'price 3',
      description: 'description 3',
    },
    {
      id: 4,
      name: 'price 4',
      description: 'description 4',
    },
    {
      id: 5,
      name: 'price 5',
      description: 'description 5',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredPrices = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawPrices();
    }

    return this.rawPrices().filter((branch) => branch.name.toLowerCase().includes(query));
  });

  protected readonly totalPricesCount = computed(() => this.filteredPrices().length);

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
  protected onTableActionTrigger(event: TableActionEvent<IBranchesList>): void {
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

  protected onRowsSelected(selectedClients: IBranchesList[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteBranch(id: number): void {
    this.rawPrices.update((current) => current.filter((branch) => branch.id !== id));
  }

  private openAddBranchModal(): void {
    console.log('Opening Add Branch Modal...');
  }

  private openEditBranchModal(client: IBranchesList): void {
    console.log('Opening Edit Branch Modal for:', client);
  }

  private exportBranches(): void {
    console.log('Exporting Branch list to PDF...');
  }
}
