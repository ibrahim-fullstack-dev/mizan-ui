import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IManufacturingQuantion } from './manufacturing-quations.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './manufacturing-quations.constant';
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
  templateUrl: './manufacturing-quations.component.html',
  styleUrl: './manufacturing-quations.component.css',
})
export class ManufacturingQuationsComponent {
  private readonly rawOffers = signal<IManufacturingQuantion[]>([
    {
      id: 1,
      name: 'name 1',
      manufacturingType: 'manufacturingType 1',
      product: 'product 1',
      productType: 'productType 1',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredManufacturingQuations = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawOffers();
    }

    return this.rawOffers().filter((offers) => offers.name.toLowerCase().includes(query));
  });

  protected readonly totalBillsInvoicesCount = computed(
    () => this.filteredManufacturingQuations().length,
  );

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
  protected onTableActionTrigger(event: TableActionEvent<IManufacturingQuantion>): void {
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

  onPageNavigationItemClick(key: string): void {
    console.log('Page navigation item clicked:', key);
  }

  protected onRowsSelected(selectedClients: IManufacturingQuantion[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawOffers.update((current) => current.filter((client) => client.id !== id));
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IManufacturingQuantion): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
