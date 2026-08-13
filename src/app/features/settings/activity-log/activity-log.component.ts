import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

// 🏛️ Shared Components
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';
import { SelectComponent } from '@components/select/select.component';
import { ButtonComponent } from '@components/button/button.component';

import { TableActionEvent } from '@components/table/table.types';
import { IActivityLog } from './activity-log.types';

// 📐 constants
import {
  TABLE_COLUMNS,
  SUBJECT_SELECT_OPTIONS,
  EVENT_SELECT_OPTIONS,
  PERIOD_SELECT_OPTIONS,
} from './activity-log.constants';
@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    TableComponent,
    SelectComponent,
    ButtonComponent,
    LucideAngularModule,
  ],
  templateUrl: './activity-log.component.html',
  styleUrl: './activity-log.component.css',
})
export class ActivityLogComponent {
  private readonly rawClients = signal<IActivityLog[]>([
    {
      id: 1,
      logName: 'Activity Log 1',
      description: 'Activity Log 1 Description',
      subjectType: 'Account',
      event: 'Created',
      createdDate: '2023-01-01',
      updatedDate: '2023-01-01',
    },
    {
      id: 2,
      logName: 'Activity Log 2',
      description: 'Activity Log 2 Description',
      subjectType: 'Account',
      event: 'Created',
      createdDate: '2023-01-02',
      updatedDate: '2023-01-02',
    },
    {
      id: 3,
      logName: 'Activity Log 3',
      description: 'Activity Log 3 Description',
      subjectType: 'Account',
      event: 'Created',
      createdDate: '2023-01-03',
      updatedDate: '2023-01-03',
    },
    {
      id: 4,
      logName: 'Activity Log 4',
      description: 'Activity Log 4 Description',
      subjectType: 'Account',
      event: 'Created',
      createdDate: '2023-01-04',
      updatedDate: '2023-01-04',
    },
    {
      id: 5,
      logName: 'Activity Log 5',
      description: 'Activity Log 5 Description',
      subjectType: 'Account',
      event: 'Created',
      createdDate: '2023-01-05',
      updatedDate: '2023-01-05',
    },
  ]);

  onRoleChange(val: any) {
    console.log('Selected role:', val);
  }

  protected readonly tableColumns = TABLE_COLUMNS;
  protected readonly subjectSelectOptions = SUBJECT_SELECT_OPTIONS;
  protected readonly eventSelectOptions = EVENT_SELECT_OPTIONS;
  protected readonly periodSelectOptions = PERIOD_SELECT_OPTIONS;

  protected readonly searchQuery = signal<string>('');
  protected readonly pageSize = signal<number>(10);
  protected readonly currentPage = signal<number>(1);

  protected readonly filteredClients = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return this.rawClients();
    }

    return (
      this.rawClients().filter((client) => client.logName.toLowerCase().includes(query)) ||
      this.rawClients().filter((client) => client.description.toLowerCase().includes(query))
    );
  });

  protected readonly totalClientsCount = computed(() => this.filteredClients().length);

  // 5️⃣ معالجات أفعال الشريط العلوي (PageHeader Actions Dispatcher)
  protected onSearchAction(key: any): void {
    console.log('Search Action:', key);
  }

  // 6️⃣ معالجات أفعال الجدول (Table Event Handlers)
  protected onTableActionTrigger(event: TableActionEvent<IActivityLog>): void {
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

  protected onRowsSelected(selectedClients: IActivityLog[]): void {
    console.log('Selected clients:', selectedClients);
  }

  protected onPageParamsChange(event: any): void {
    this.currentPage.set(event.page);
    this.pageSize.set(event.pageSize);
  }

  private deleteClient(id: number): void {
    this.rawClients.update((current) => current.filter((client) => client.id !== id));
  }

  private openAddClientModal(): void {
    console.log('Opening Add Client Modal...');
  }

  private openEditClientModal(client: IActivityLog): void {
    console.log('Opening Edit Client Modal for:', client);
  }

  private exportClients(): void {
    console.log('Exporting client list to PDF...');
  }
}
