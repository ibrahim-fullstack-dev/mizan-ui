// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { Pencil, Trash2, Hash, Calendar, Repeat, Eye, Info } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'invoiceNumber', label: 'Invoice Number', icon: Hash },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'repeat', label: 'Repeat', icon: Repeat },
  { key: 'startDate', label: 'Start Date', icon: Calendar },
  { key: 'nextDate', label: 'Next Date', icon: Calendar },
  { key: 'endDate', label: 'End Date', icon: Calendar },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
