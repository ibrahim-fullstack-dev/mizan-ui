// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Download,
  Pencil,
  Trash2,
  Hash,
  Plus,
  Eye,
  Warehouse,
  Building2,
  Calendar,
  CircleDollarSign,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'invoiceNumber', label: 'Invoice Number', icon: Hash },
  { key: 'ProductionProductName', label: 'Product Name', icon: Hash },
  { key: 'branch', label: 'Branch', icon: Building2 },
  { key: 'warehouse', label: 'Warehouse', icon: Warehouse },
  { key: 'date', label: 'Date', icon: Calendar },
  { key: 'totalPrice', label: 'Total Price', icon: CircleDollarSign },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: Plus },
  { key: 'delete', label: 'Delete All', variant: 'danger', icon: Trash2 },
  { key: 'export-pdf', label: 'Export PDF', variant: 'outline', icon: Download },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye },
  { type: 'edit', icon: Pencil },
  { type: 'delete', icon: Trash2, danger: true },
];
