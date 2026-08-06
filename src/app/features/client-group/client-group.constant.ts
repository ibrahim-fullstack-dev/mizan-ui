// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import { Plus, Pencil, Trash2, Eye, Hash, Percent, CircleDollarSign, Type } from 'lucide-angular';
CircleDollarSign;

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: Hash },
  { key: 'type', label: 'Type', icon: Type },
  { key: 'priceListValue', label: 'Price List Value', icon: CircleDollarSign },
  { key: 'percentage', label: 'Percentage', icon: Percent },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: Plus },
  { key: 'delete-all', label: 'Delete All', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
