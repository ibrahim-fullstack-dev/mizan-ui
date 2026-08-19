// src/app/features/settings/activity-log/activity-log.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { SelectComponent } from '@components/select/select.component';
import { TableComponent } from '@components/table/table.component';

import { TablePageEvent } from '@components/table/table.types';

import { IPageLayoutConfig } from '@shared/components/page-layout/page-layout.types';

import {
  SEARCH_INPUT,
  SUBJECT_SELECT_OPTIONS,
  EVENT_SELECT_OPTIONS,
  PERIOD_SELECT_OPTIONS,
  DATA_PAGE_CONFIG,
  TABLE_CONFIG,
} from './activity-log.constants';

import { IActivityLog } from './activity-log.types';

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, SelectComponent, TableComponent],
  templateUrl: './activity-log.component.html',
  styleUrl: './activity-log.component.css',
})
export class ActivityLogComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawActivityLogs = signal<IActivityLog[]>([
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

  // =====================================================
  // UI STATE
  // =====================================================

  protected readonly searchQuery = signal('');
  protected readonly subjectFilter = signal('');
  protected readonly eventFilter = signal('');
  protected readonly periodFilter = signal('');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;

  protected readonly subjectSelect = SUBJECT_SELECT_OPTIONS;
  protected readonly eventSelect = EVENT_SELECT_OPTIONS;
  protected readonly periodSelect = PERIOD_SELECT_OPTIONS;

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawActivityLogs(),
    totalItems: this.rawActivityLogs().length,
  }));

  // =====================================================
  // FILTERS
  // =====================================================

  protected onSubjectChange(value: string): void {
    this.subjectFilter.set(value);
  }

  protected onEventChange(value: string): void {
    this.eventFilter.set(value);
  }

  protected onPeriodChange(value: string): void {
    this.periodFilter.set(value);
  }

  // =====================================================
  // TABLE PAGINATION
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IActivityLog['id'][]): void {
    console.log('Selected activity log IDs:', selectedIds);
  }
}
