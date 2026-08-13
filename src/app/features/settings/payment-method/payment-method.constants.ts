// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import { UserPlus, Pencil, Trash2, CircleUserRound, Hash, ArrowLeftRight } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: Hash },
  { key: 'way', label: 'Way', icon: ArrowLeftRight },
  { key: 'accountName', label: 'Account Name', icon: CircleUserRound },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add user', variant: 'primary', icon: UserPlus },
  { key: 'delete', label: 'Delete', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
