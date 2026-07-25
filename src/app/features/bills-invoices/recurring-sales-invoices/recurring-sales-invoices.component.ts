import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent } from '@components/table/table.types';
import { IRecurringSalesInvoices } from './recurring-sales-invoices.types';

// 📐 constants
import { TABLE_COLUMNS, TABLE_ACTIONS } from './recurring-sales-invoices.constant';
@Component({
  selector: 'app-recurring-sales-invoices',
  standalone: true,
  imports: [CommonModule, TableComponent, LucideAngularModule, ButtonComponent],
  templateUrl: './recurring-sales-invoices.component.html',
  styleUrl: './recurring-sales-invoices.component.css',
})
export class RecurringSalesInvoicesComponent {
  protected readonly rawRecurringSalesInvoices = signal<IRecurringSalesInvoices[]>([
    {
      id: 1,
      invoiceNumber: '12345678',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 2,
      invoiceNumber: '12345678',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 3,
      invoiceNumber: '12345678',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 4,
      invoiceNumber: '12345678',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
    {
      id: 5,
      invoiceNumber: '12345678',
      status: 'Unpaid',
      repeat: 'Daily',
      startDate: '2022-01-01',
      nextDate: '2022-01-01',
      endDate: '2022-01-01',
    },
  ]);

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly tableActions = TABLE_ACTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  // 6️⃣ معالجات أفعال الجدول (Table Event Handlers)
  protected onTableActionTrigger(event: TableActionEvent<IRecurringSalesInvoices>): void {
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

  protected onRowsSelected(selectedClients: IRecurringSalesInvoices[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawRecurringSalesInvoices.update((current) =>
      current.filter((recurringSalesInvoices) => recurringSalesInvoices.id !== id),
    );
  }

  private openEditClientModal(client: IRecurringSalesInvoices): void {
    console.log('Opening Edit Client Modal for:', client);
  }
}
