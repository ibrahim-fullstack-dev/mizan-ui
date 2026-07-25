// src/app/shared/components/table/table.types.ts

import { LucideIconData } from 'lucide-angular';

export interface TableColumn {
  key: string;
  label: string;
  icon?: LucideIconData;
  sortable?: boolean;
  formatter?: (value: any, row?: any) => string;
}

export type TableActionType = 'edit' | 'delete' | 'view';

export interface TableAction {
  type: TableActionType;
  icon?: LucideIconData;
  label?: string;
  danger?: boolean;
}

export interface TableActionEvent<T = any> {
  action: TableActionType;
  row: T;
}

export interface TablePageEvent {
  page: number;
  pageSize: number;
}
