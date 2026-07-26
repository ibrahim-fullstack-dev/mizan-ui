// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Hash,
  Download,
  Pencil,
  Trash2,
  Info,
  Calendar,
  Building2,
  UserPlus,
  Warehouse,
  RotateCw,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  {
    key: 'code',
    label: 'Code',
    icon: Hash,
  },
  {
    key: 'reference',
    label: 'Reference',
    icon: RotateCw,
  },
  {
    key: 'startAt',
    label: 'Start At',
    icon: Calendar,
  },
  {
    key: 'endAt',
    label: 'End At',
    icon: Calendar,
  },
  {
    key: 'branchName',
    label: 'Branch Name',
    icon: Building2,
  },
  {
    key: 'warehouseName',
    label: 'Warehouse Name',
    icon: Warehouse,
  },
  {
    key: 'date',
    label: 'Date',
    icon: Calendar,
  },
  {
    key: 'status',
    label: 'Status',
    icon: Info,
  },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: UserPlus },
  { key: 'delete', label: 'Delete All', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
