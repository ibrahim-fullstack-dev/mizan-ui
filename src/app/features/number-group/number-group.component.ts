import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { INumberGroup } from './number-group.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './number-group.constant';
@Component({
  selector: 'app-number-group',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './number-group.component.html',
  styleUrl: './number-group.component.css',
})
export class NumberGroupComponent {
  private readonly rawGroupNumberssData = signal<INumberGroup[]>([
    {
      id: 1,
      name: 'number group 1',
      prefix: 'prefix',
      next: 1,
      section: 'section',
      leftPad: 1,
      yearPrefix: 'yearPrefix',
      monthPrefix: 'monthPrefix',
      status: 'active',
      USED: true,
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
      return this.rawGroupNumberssData();
    }

    return this.rawGroupNumberssData().filter((costCenter) =>
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
  protected onTableActionTrigger(event: TableActionEvent<INumberGroup>): void {
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

  protected onRowsSelected(selectedClients: INumberGroup[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawGroupNumberssData.update((current) =>
      current.filter((costCenter) => costCenter.id !== id),
    );
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: INumberGroup): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
