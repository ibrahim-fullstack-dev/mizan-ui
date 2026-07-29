// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import { Plus, Eye, Pencil, Trash2, Target, File } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: Target },
  { key: 'description', label: 'Description', icon: File },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', icon: Plus },
  { key: 'delete-all', label: 'Delete All', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
