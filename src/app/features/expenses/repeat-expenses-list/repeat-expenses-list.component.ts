import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IRepeatExpense } from './repeat-expenses-list.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './repeat-expenses-list.constant';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './repeat-expenses-list.component.html',
  styleUrl: './repeat-expenses-list.component.css',
})
export class RepeatExpensesListComponent {
  private readonly rawExpenses = signal<IRepeatExpense[]>([
    {
      id: 1,
      referenceNumber: '1234567890',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
    {
      id: 2,
      referenceNumber: '1234567890',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
    {
      id: 3,
      referenceNumber: '1234567890',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
    {
      id: 4,
      referenceNumber: '1234567890',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
    {
      id: 5,
      referenceNumber: '1234567890',
      expenseCategory: 'Rent',
      active: true,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      repeat: true,
      nextDate: '2024-01-01',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredExpenses = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawExpenses();
    }

    return this.rawExpenses().filter((client) =>
      client.expenseCategory.toLowerCase().includes(query),
    );
  });

  protected readonly totalClientsCount = computed(() => this.filteredExpenses().length);

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
  protected onTableActionTrigger(event: TableActionEvent<IRepeatExpense>): void {
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

  protected onRowsSelected(selectedClients: IRepeatExpense[]): void {
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

  private openEditClientModal(client: IRepeatExpense): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
