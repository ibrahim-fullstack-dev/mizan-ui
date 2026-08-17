import { LucideIconData } from 'lucide-angular';
import { ButtonConfig } from '../button/button.types';

export type TableId = string | number;

/**
 * Supported table actions.
 */
export type TableActionType = 'view' | 'edit' | 'delete';

/**
 * Defines a table column.
 */
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  icon?: LucideIconData;
}

/**
 * Emitted when pagination changes.
 */
export interface TablePageEvent {
  page: number;
  pageSize: number;
}

/**
 * Defines an action button displayed for a row.
 */
export interface TableAction {
  action: TableActionType;
  button: ButtonConfig;
}

/**
 * Emitted when a row action is triggered.
 */
export interface TableActionEvent<T extends { id: TableId }> {
  action: TableActionType;
  id: T['id'];
}

/**
 * Main table configuration.
 */
export interface TableConfig<T extends { id: TableId }> {
  data?: T[];

  columns: TableColumn<T>[];

  actions?: TableAction[];

  selectable?: boolean;

  showActions?: boolean;

  showPagination?: boolean;

  emptyMessage?: string;

  totalItems?: number;

  pageSize?: number;

  currentPage?: number;
}
