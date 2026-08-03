import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IEstimatedBudget } from './estimated-budget.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './estimated-budget.constant';
@Component({
  selector: 'app-estimated-budget',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './estimated-budget.component.html',
  styleUrl: './estimated-budget.component.css',
})
export class estimatedBudgetComponent {
  private readonly rawEstimatedBudgets = signal<IEstimatedBudget[]>([
    {
      id: 1,
      name: 'CC001',
      code: 'CC001',
      periodType: '',
      periodStart: '2023-01-01',
      periodEnd: '2023-12-31',
      budgetYear: '2023',
      costCenter: 'CC001',
      status: 'founded',
    },
    {
      id: 2,
      name: 'CC002',
      code: 'CC002',
      periodType: '',
      periodStart: '2023-01-01',
      periodEnd: '2023-12-31',
      budgetYear: '2023',
      costCenter: 'CC001',
      status: 'founded',
    },
    {
      id: 3,
      name: 'CC003',
      code: 'CC003',
      periodType: '',
      periodStart: '2023-01-01',
      periodEnd: '2023-12-31',
      budgetYear: '2023',
      costCenter: 'CC001',
      status: 'founded',
    },
    {
      id: 4,
      name: 'CC004',
      code: 'CC004',
      periodType: '',
      periodStart: '2023-01-01',
      periodEnd: '2023-12-31',
      budgetYear: '2023',
      costCenter: 'CC001',
      status: 'founded',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredCostCenters = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawEstimatedBudgets();
    }

    return this.rawEstimatedBudgets().filter((costCenter) =>
      costCenter.name.toLowerCase().includes(query),
    );
  });

  protected readonly totalostCentersCount = computed(() => this.filteredCostCenters().length);

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
  protected onTableActionTrigger(event: TableActionEvent<IEstimatedBudget>): void {
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

  protected onRowsSelected(selectedClients: IEstimatedBudget[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawEstimatedBudgets.update((current) =>
      current.filter((costCenter) => costCenter.id !== id),
    );
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IEstimatedBudget): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
