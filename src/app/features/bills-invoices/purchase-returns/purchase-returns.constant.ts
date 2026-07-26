// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Eye,
  Download,
  Pencil,
  Trash2,
  User,
  CircleDollarSign,
  CirclePercent,
  Hash,
  Plus,
  Building2,
  Info,
  Calendar,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'invoiceNumber', label: 'Invoice Number', icon: Hash },
  { key: 'purchaseInvoiceNumber', label: 'Purchase Invoice Number', icon: Hash },
  { key: 'SupplierName', label: 'Supplier Name', icon: User },
  { key: 'BranchName', label: 'Branch Name', icon: Building2 },
  { key: 'TotalPrice', label: 'Total Price', icon: CirclePercent },
  { key: 'Balance', label: 'Balance', icon: CircleDollarSign },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'returnDate', label: 'Return Date', icon: Calendar },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: Plus },
  { key: 'export-pdf', label: 'Export PDF', variant: 'outline', icon: Download },
  { key: 'delete', label: 'Delete All', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye },
  { type: 'edit', icon: Pencil },
  { type: 'delete', icon: Trash2, danger: true },
];
