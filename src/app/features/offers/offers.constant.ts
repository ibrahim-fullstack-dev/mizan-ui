// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { IPageNavigationItem } from './offers.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Download,
  Pencil,
  Trash2,
  User,
  Hash,
  DollarSign,
  CirclePercent,
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
  { key: 'clientName', label: 'Client Name', icon: User },
  { key: 'totalAmount', label: 'Total Amount', icon: CirclePercent },
  { key: 'Balance', label: 'Balance', icon: DollarSign },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'date', label: 'Date', icon: Calendar },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: Plus },
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
    key: 'open',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Open',
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
