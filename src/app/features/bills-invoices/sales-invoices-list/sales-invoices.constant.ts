// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { IPageNavigationItem } from './sales-invoices.types';
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
  { key: 'add-sale-retail', label: 'Add Sale Retail', variant: 'secondary', icon: Plus },
  { key: 'add-debit', label: 'Add Debit Sale', variant: 'secondary', icon: Plus },
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
    key: 'paid',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Paid',
  },
  {
    key: 'not-paid',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Not Paid',
  },
  {
    key: 'partly-paid',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Partly Paid',
  },
  {
    key: 'sent',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Sent',
  },
  {
    key: 'seen',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Seen',
  },
  {
    key: 'due',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Due',
  },
  {
    key: 'debit-sale',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Debit Sale',
  },
  {
    key: 'retail',
    buttonConfig: {
      variant: 'text',
    },
    content: 'Retail',
  },
];
