// src/app/features/settings/activity-log/activity-log.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { IActivityLog } from './activity-log.types';

// Constants
import { DATA_PAGE_CONFIG } from './activity-log.constants';

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
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
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<IActivityLog>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawActivityLogs(),

      totalItems: this.rawActivityLogs().length,
    },
  }));
}
