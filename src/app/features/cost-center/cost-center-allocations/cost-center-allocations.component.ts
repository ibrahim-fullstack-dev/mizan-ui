import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { ICostCenterAllocation } from './cost-center-allocations.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './cost-center-allocations.constant';
@Component({
  selector: 'app-sales-invoices',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    InputComponent,
    TableComponent,
    LucideAngularModule,
    ButtonComponent,
  ],
  templateUrl: './cost-center-allocations.component.html',
  styleUrl: './cost-center-allocations.component.css',
})
export class CostCenterAllocationsComponent {
  private readonly rawCostCenterAllocations = signal<ICostCenterAllocation[]>([
    {
      id: 1,
      costCenter: 'CC001',
      ledgerReference: '12345678',
      reference: '12345678',
      transactionType: 'Debit',
      credit: 100,
      debit: 100,
      status: 'Unpaid',
      createdAt: '2022-01-01',
    },
    {
      id: 2,
      costCenter: 'CC001',
      ledgerReference: '12345678',
      reference: '12345678',
      transactionType: 'Debit',
      credit: 100,
      debit: 100,
      status: 'Unpaid',
      createdAt: '2022-01-01',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredBillsInvoices = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawCostCenterAllocations();
    }

    return this.rawCostCenterAllocations().filter((costCenterAllocation) =>
      costCenterAllocation.costCenter.toLowerCase().includes(query),
    );
  });

  protected readonly totalBillsInvoicesCount = computed(() => this.filteredBillsInvoices().length);

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
  protected onTableActionTrigger(event: TableActionEvent<ICostCenterAllocation>): void {
    const costCenterAllocation = event.row;

    switch (event.action) {
      case 'delete':
        this.deleteClient(costCenterAllocation.id);
        break;
      case 'edit':
        this.openEditClientModal(costCenterAllocation);
        break;
    }
  }

  onPageNavigationItemClick(key: string): void {
    console.log('Page navigation item clicked:', key);
  }

  protected onRowsSelected(selectedClients: ICostCenterAllocation[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawCostCenterAllocations.update((current) =>
      current.filter((costCenterAllocation) => costCenterAllocation.id !== id),
    );
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: ICostCenterAllocation): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
