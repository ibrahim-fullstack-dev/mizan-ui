// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  UserPlus,
  Download,
  Pencil,
  Trash2,
  User,
  Mail,
  Phone,
  Eye,
  UserRoundKey,
  BrickWallShield,
  LogIn,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: User },
  { key: 'userName', label: 'User Name', icon: User },
  { key: 'email', label: 'Email', icon: Mail },
  { key: 'phone', label: 'Phone', icon: Phone },
  { key: 'type', label: 'Type', icon: BrickWallShield },
  { key: 'role', label: 'Role', icon: UserRoundKey },
  { key: 'lastLogin', label: 'Last Login', icon: LogIn },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add user', variant: 'primary', icon: UserPlus },
  { key: 'delete', label: 'Delete', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
