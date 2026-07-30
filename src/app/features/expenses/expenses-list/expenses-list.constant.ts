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
  ChartBarStacked,
  Eye,
  CreditCard,
  Type,
  Plus,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'referenceNumber', label: 'Reference Number', icon: RotateCw },
  { key: 'expenseNote', label: 'Expense Note', icon: NotebookPen },
  { key: 'expenseCategory', label: 'Expense Category', icon: ChartBarStacked },
  { key: 'date', label: 'Date', icon: Calendar },
  { key: 'branch', label: 'Branch', icon: Building2 },
  { key: 'paymentMethod', label: 'Payment Method', icon: CreditCard },
  { key: 'type', label: 'Type', icon: Type },
  { key: 'taxableAmount', label: 'Taxable Amount', icon: CircleDollarSign },
  { key: 'taxAmount', label: 'Tax Amount', icon: CircleDollarSign },
  { key: 'totalAmount', label: 'Total Amount', icon: CircleDollarSign },
  { key: 'publicNote', label: 'Public Note', icon: NotebookPen },
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
