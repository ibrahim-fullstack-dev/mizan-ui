import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { ICategory } from './categories.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './categories.constant';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesSettingsComponent {
  private readonly rawBranches = signal<ICategory[]>([
    {
      id: 1,
      categoryName: 'Category 1',
      code: 1,
      parentCategory: 1,
      description: 'Description 1',
    },
    {
      id: 2,
      categoryName: 'Category 2',
      code: 2,
      parentCategory: 2,
      description: 'Description 2',
    },
    {
      id: 3,
      categoryName: 'Category 3',
      code: 3,
      parentCategory: 3,
      description: 'Description 3',
    },
    {
      id: 4,
      categoryName: 'Category 4',
      code: 4,
      parentCategory: 4,
      description: 'Description 4',
    },
    {
      id: 5,
      categoryName: 'Category 5',
      code: 5,
      parentCategory: 5,
      description: 'Description 5',
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

    return this.rawBranches().filter((branch) => branch.categoryName.toLowerCase().includes(query));
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
  protected onTableActionTrigger(event: TableActionEvent<ICategory>): void {
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

  protected onRowsSelected(selectedClients: ICategory[]): void {
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

  private openEditBranchModal(client: ICategory): void {
    console.log('Opening Edit Branch Modal for:', client);
  }

  private exportBranches(): void {
    console.log('Exporting Branch list to PDF...');
  }
}
