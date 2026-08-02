// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Pencil,
  Trash2,
  Calendar,
  Eye,
  Hash,
  Plus,
  User,
  DollarSign,
  Building2,
  NotebookPen,
  ArrowLeftRight,
  Download,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'payNumber', label: 'Pay Number', icon: Hash },
  { key: 'saleInvoiceNumber', label: 'Sale Invoice Number', icon: Hash },
  { key: 'clientName', label: 'Client Name', icon: User },
  { key: 'paymentMethod', label: 'Payment Method', icon: ArrowLeftRight },
  { key: 'amount', label: 'Amount', icon: DollarSign },
  { key: 'branch', label: 'Branch', icon: Building2 },
  { key: 'date', label: 'Date', icon: Calendar },
  { key: 'note', label: 'Note', icon: NotebookPen },
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
