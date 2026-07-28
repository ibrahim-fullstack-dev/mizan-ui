// src/app/shared/components/table/table.types.ts

export interface TableColumn {
  key: string;
  label: string;
  icon?: string;
  sortable?: boolean;
}

export type TableActionType = 'view' | 'edit' | 'delete';

export interface TableAction {
  type: TableActionType;
  icon?: string;
  label?: string;
  danger?: boolean;
}

export interface TableActionEvent<T = any> {
  action: TableActionType;
  row: T;
}

/**
 */
export interface TablePageEvent {
  page: number;
  pageSize: number;
}
