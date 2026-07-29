import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IBrand } from './brands.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './brands.constant';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  private readonly rawBrands = signal<IBrand[]>([
    {
      id: 1,
      name: 'brand 1',
      description: 'description 1',
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
      return this.rawBrands();
    }

    return this.rawBrands().filter((branch) => branch.name.toLowerCase().includes(query));
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
  protected onTableActionTrigger(event: TableActionEvent<IBrand>): void {
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

  protected onRowsSelected(selectedClients: IBrand[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteBranch(id: number): void {
    this.rawBrands.update((current) => current.filter((branch) => branch.id !== id));
  }

  private openAddBranchModal(): void {
    console.log('Opening Add Branch Modal...');
  }

  private openEditBranchModal(client: IBrand): void {
    console.log('Opening Edit Branch Modal for:', client);
  }

  private exportBranches(): void {
    console.log('Exporting Branch list to PDF...');
  }
}
