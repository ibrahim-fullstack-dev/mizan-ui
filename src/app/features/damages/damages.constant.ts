// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  UserPlus,
  Download,
  Pencil,
  Trash2,
  RotateCw,
  ShieldX,
  Building2,
  Warehouse,
  CircleDollarSign,
  Calendar,
  NotebookPen,
  Eye,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'referenceNumber', label: 'Reference Number', icon: RotateCw },
  { key: 'name', label: 'Name', icon: ShieldX },
  { key: 'branch', label: 'Branch', icon: Building2 },
  { key: 'warehouse', label: 'Warehouse', icon: Warehouse },
  { key: 'TotalAmountRecovered', label: 'Total Amount Recovered', icon: CircleDollarSign },
  { key: 'date', label: 'Date', icon: Calendar },
  { key: 'notes', label: 'Notes', icon: NotebookPen },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add-damage', label: 'Add Damage', icon: UserPlus },
  { key: 'delete-all', label: 'Delete All', variant: 'danger', icon: Trash2 },
  { key: 'export-pdf', label: 'Export PDF', variant: 'outline', icon: Download },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
