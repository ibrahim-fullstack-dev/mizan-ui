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
  { key: 'saleInvoiceNumber', label: 'Sale Invoice Number', icon: Hash },
  { key: 'saleDate', label: 'Sale Date', icon: Calendar },
  { key: 'settlementDate', label: 'Settlement Date', icon: Calendar },
  { key: 'clientName', label: 'Client Name', icon: User },
  { key: 'branch', label: 'Branch', icon: Building2 },
  { key: 'salesUser', label: 'Sales User', icon: User },
  { key: 'settlementUser', label: 'Settlement User', icon: User },
  { key: 'settlementAmount', label: 'Settlement Amount', icon: DollarSign },
  { key: 'invoiceTotal', label: 'Invoice Total', icon: DollarSign },
  { key: 'totalPaid', label: 'Total Paid', icon: DollarSign },
  { key: 'remaining', label: 'Remaining', icon: DollarSign },
];
