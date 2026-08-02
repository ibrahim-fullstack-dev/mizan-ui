// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Pencil,
  Trash2,
  Eye,
  Hash,
  Plus,
  ChartColumnStacked,
  CircleDollarSign,
  Building2,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: Hash },
  { key: 'branch', label: 'Branch', icon: Building2 },
  { key: 'assetCategory', label: 'Asset Category', icon: ChartColumnStacked },
  { key: 'ledgerValue', label: 'Ledger Value', icon: CircleDollarSign },
  { key: 'purchaseValue', label: 'Purchase Value', icon: CircleDollarSign },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add Expense', variant: 'primary', icon: Plus },
  { key: 'delete-all', label: 'Delete All', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
