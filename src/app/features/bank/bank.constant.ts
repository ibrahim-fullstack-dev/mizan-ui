import { TableColumn, TableAction } from '@components/table/table.types';
import { Hash, User, Type, DollarSign, Eye, Pencil, Trash2 } from 'lucide-angular';

export const BANK_TABLE_COLUMNS: TableColumn[] = [
  { key: 'accountName', label: 'Account Name', icon: User },
  { key: 'accountType', label: 'Account Type', icon: Type },
  { key: 'accountNumber', label: 'Account Number', icon: Hash },
  { key: 'balance', label: 'Balance', icon: DollarSign },
];

export const ACCTIONS_BANK_TABLE_COLUMNS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
