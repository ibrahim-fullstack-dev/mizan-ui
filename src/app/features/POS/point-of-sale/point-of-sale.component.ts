import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IPOS } from './point-of-sale.types';

// 📐 constants
import { TABLE_COLUMNS, HEADER_BUTTONS, TABLE_ACTIONS } from './point-of-sale.constant';
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, InputComponent, TableComponent, LucideAngularModule],
  templateUrl: './point-of-sale.component.html',
  styleUrl: './point-of-sale.component.css',
})
export class PointOfSaleComponent {
  private readonly rawPOS = signal<IPOS[]>([
    {
      id: 1,
      code: '12345678',
      reference: '12345678',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Ahmad Omar',
      warehouseName: 'Ahmad Omar',
      date: '2022-01-01',
      status: 'Unpaid',
    },
    {
      id: 2,
      code: '123456789',
      reference: '123456789',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Sara Khalid',
      warehouseName: 'Sara Khalid',
      date: '2022-01-01',
      status: 'Unpaid',
    },
    {
      id: 3,
      code: '123456788',
      reference: '123456788',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Fahad Suleiman',
      warehouseName: 'Fahad Suleiman',
      date: '2022-01-01',
      status: 'Unpaid',
    },
    {
      id: 4,
      code: '123456787',
      reference: '123456787',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Reem Ali',
      warehouseName: 'Reem Ali',
      date: '2022-01-01',
      status: 'Unpaid',
    },
    {
      id: 5,
      code: '123456786',
      reference: '123456786',
      startAt: '2022-01-01',
      endAt: '2022-01-01',
      branchName: 'Yousef Hassan',
      warehouseName: 'Yousef Hassan',
      date: '2022-01-01',
      status: 'Unpaid',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly headerButtons = HEADER_BUTTONS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredPOS = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawPOS();
    }

    return this.rawPOS().filter(
      (pos) =>
        pos.code.toLowerCase().includes(query) ||
        pos.reference.toLowerCase().includes(query) ||
        pos.startAt.toLowerCase().includes(query) ||
        pos.endAt.toLowerCase().includes(query) ||
        pos.branchName.toLowerCase().includes(query) ||
        pos.warehouseName.toLowerCase().includes(query) ||
        pos.date.toLowerCase().includes(query) ||
        pos.status.toLowerCase().includes(query),
    );
  });

  protected readonly totalPOSCount = computed(() => this.filteredPOS().length);

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
  protected onTableActionTrigger(event: TableActionEvent<IPOS>): void {
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

  protected onRowsSelected(selectedClients: IPOS[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawPOS.update((current) => current.filter((pos) => pos.id !== id));
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IPOS): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
