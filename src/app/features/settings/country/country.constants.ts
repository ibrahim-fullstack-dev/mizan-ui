// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import { UserPlus, Pencil, Trash2, Hash, Phone, CircleEllipsis } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'nameInArabic', label: 'Name in Arabic', icon: Hash },
  { key: 'nameInEnglish', label: 'Name in English', icon: Hash },
  { key: 'Code', label: 'Code', icon: CircleEllipsis },
  { key: 'phoneCode', label: 'Phone Code', icon: Phone },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: UserPlus },
  { key: 'delete', label: 'Delete', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
