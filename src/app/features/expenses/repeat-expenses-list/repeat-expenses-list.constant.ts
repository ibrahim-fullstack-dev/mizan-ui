// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  UserPlus,
  Download,
  Pencil,
  Trash2,
  RotateCw,
  Calendar,
  ChartBarStacked,
  Eye,
  RotateCcw,
  Info,
  Plus,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'referenceNumber', label: 'Reference Number', icon: RotateCw },
  { key: 'expenseCategory', label: 'Expense Category', icon: ChartBarStacked },
  { key: 'active', label: 'Active', icon: Info },
  { key: 'startDate', label: 'Start Date', icon: Calendar },
  { key: 'endDate', label: 'End Date', icon: Calendar },
  { key: 'repeat', label: 'Repeat', icon: RotateCcw },
  { key: 'nextDate', label: 'Next Date', icon: Calendar },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add Expense', variant: 'primary', icon: Plus },
  { key: 'delete-all', label: 'Delete All', variant: 'danger', icon: Trash2 },
  { key: 'export-pdf', label: 'Export PDF', variant: 'outline', icon: Download },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
