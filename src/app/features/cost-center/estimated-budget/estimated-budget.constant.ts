// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  UserPlus,
  Pencil,
  Trash2,
  Calendar,
  Eye,
  Hash,
  Asterisk,
  Type,
  Info,
  SquareSquare,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: Hash },
  { key: 'code', label: 'Code', icon: Asterisk },
  { key: 'periodType', label: 'Period Type', icon: Type },
  { key: 'periodStart', label: 'Period Start', icon: Calendar },
  { key: 'periodEnd', label: 'Period End', icon: Calendar },
  { key: 'budgetYear', label: 'Budget Year', icon: Calendar },
  { key: 'costCenter', label: 'Cost Center', icon: SquareSquare },
  { key: 'status', label: 'Status', icon: Info },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add-cost-center', label: 'Add Cost Center', variant: 'primary', icon: UserPlus },
  { key: 'delete-all', label: 'Delete All', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
