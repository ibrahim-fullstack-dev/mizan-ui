// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { IPageNavigationItem } from './purchase-orders.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Download,
  Pencil,
  Trash2,
  User,
  Hash,
  DollarSign,
  Info,
  Calendar,
  Plus,
  Eye,
  SquareArrowOutUpRight,
  FileText,
  PrinterCheck,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'invoiceNumber', label: 'Invoice Number', icon: Hash },
  { key: 'supplierName', label: 'Supplier Name', icon: User },
  { key: 'BranchName', label: 'Branch Name', icon: User },
  { key: 'warehouseName', label: 'Warehouse Name', icon: User },
  { key: 'Balance', label: 'Balance', icon: DollarSign },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'date', label: 'Date', icon: Calendar },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add Purchase Order', variant: 'primary', icon: Plus },
  { key: 'delete', label: 'Delete All', variant: 'danger', icon: Trash2 },
  { key: 'export-pdf', label: 'Export PDF', variant: 'outline', icon: Download },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye },
  { type: 'edit', icon: Pencil },
  { type: 'view', icon: SquareArrowOutUpRight },
  { type: 'view', icon: FileText },
  { type: 'view', icon: PrinterCheck },
  { type: 'delete', icon: Trash2, danger: true },
];

export const PAGE_NAVIGATION_BUTTONS: IPageNavigationItem[] = [
  {
    key: 'all',
    buttonConfig: {
      variant: 'text',
    },
    content: 'All',
  },
  {
    key: 'pending',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Pending',
  },
  {
    key: 'invoiced',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Invoiced',
  },
  {
    key: 'accepted',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Accepted',
  },
  {
    key: 'rejected',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Rejected',
  },
];
