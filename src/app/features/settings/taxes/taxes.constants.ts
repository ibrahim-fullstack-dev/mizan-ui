import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import { UserPlus, Pencil, Trash2, Hash, CircleDollarSign, CircleUserRound } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: Hash },
  { key: 'rate', label: 'Rate', icon: CircleDollarSign },
  { key: 'saleAccount', label: 'Sale Account', icon: CircleUserRound },
  { key: 'purchaseAccount', label: 'Purchase Account', icon: CircleUserRound },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: UserPlus },
  { key: 'delete', label: 'Delete', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
