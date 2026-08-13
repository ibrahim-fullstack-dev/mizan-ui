import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import { UserPlus, Pencil, Trash2, User, UserRoundKey } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'roleName', label: 'Role Name', icon: User },
  { key: 'permissions', label: 'Permissions', icon: UserRoundKey },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: UserPlus },
  { key: 'delete', label: 'Delete', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
