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
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'nameInArabic', label: 'Name in Arabic', icon: Hash },
  { key: 'nameInEnglish', label: 'Name in English', icon: Hash },
  { key: 'code', label: 'Code', icon: Asterisk },
  { key: 'type', label: 'Type', icon: Type },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'startDate', label: 'Start Date', icon: Calendar },
  { key: 'endDate', label: 'End Date', icon: Calendar },
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
