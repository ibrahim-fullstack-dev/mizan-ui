// src/app/features/bills-invoices/sales-invoices-list/sales-invoices-list.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import {
  IPageLayoutConfig,
  IPageAction,
  IPageLayout,
} from '@shared/components/page-layout/page-layout.types';

import {
  Download,
  Pencil,
  Trash2,
  User,
  ReceiptText,
  CircleDollarSign,
  Info,
  Calendar,
  Plus,
  Eye,
  Search,
} from 'lucide-angular';

import { ISalesInvoice } from './sales-invoices-list.types';

// =====================================================
// PAGE LAYOUT
// =====================================================

export const PAGE_LAYOUT: IPageLayout = {
  showToolbar: true,
  showTabs: true,
  showTable: true,
};

// =====================================================
// SEARCH INPUT
// =====================================================

export const SEARCH_INPUT: InputConfig = {
  type: 'text',
  placeholder: 'Search sales invoices...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<ISalesInvoice>[] = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    icon: ReceiptText,
  },
  {
    key: 'clientName',
    label: 'Client Name',
    icon: User,
  },
  {
    key: 'totalAmount',
    label: 'Total Amount',
    icon: CircleDollarSign,
  },
  {
    key: 'balance',
    label: 'Balance',
    icon: CircleDollarSign,
  },
  {
    key: 'status',
    label: 'Status',
    icon: Info,
  },
  {
    key: 'date',
    label: 'Date',
    icon: Calendar,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'add',
    buttonConfig: {
      label: 'Add',
      variant: 'primary',
      icon: Plus,
      type: 'button',
    },
  },
  {
    key: 'delete-all',
    buttonConfig: {
      label: 'Delete All',
      variant: 'danger',
      icon: Trash2,
      type: 'button',
    },
  },
  {
    key: 'add-sale-retail',
    buttonConfig: {
      label: 'Add Sale Retail',
      variant: 'secondary',
      icon: Plus,
      type: 'button',
    },
  },
  {
    key: 'add-debit',
    buttonConfig: {
      label: 'Add Debit Sale',
      variant: 'secondary',
      icon: Plus,
      type: 'button',
    },
  },
  {
    key: 'export-pdf',
    buttonConfig: {
      label: 'Export PDF',
      variant: 'outline',
      icon: Download,
      type: 'button',
    },
  },
];

// =====================================================
// TABLE ACTIONS
// =====================================================

export const TABLE_ACTIONS: TableAction[] = [
  {
    action: 'view',
    button: {
      icon: Eye,
      variant: 'text',
      type: 'button',
    },
  },
  {
    action: 'edit',
    button: {
      icon: Pencil,
      variant: 'text',
      type: 'button',
    },
  },
  {
    action: 'delete',
    button: {
      icon: Trash2,
      variant: 'danger',
      type: 'button',
    },
  },
];

// =====================================================
// TABS
// =====================================================

export const TABS: IPageAction[] = [
  {
    key: 'all',
    buttonConfig: {
      variant: 'text',
      label: 'All',
      type: 'button',
    },
  },
  {
    key: 'pending',
    buttonConfig: {
      variant: 'text',
      label: 'Pending',
      type: 'button',
    },
  },
  {
    key: 'paid',
    buttonConfig: {
      variant: 'text',
      label: 'Paid',
      type: 'button',
    },
  },
  {
    key: 'not-paid',
    buttonConfig: {
      variant: 'text',
      label: 'Not Paid',
      type: 'button',
    },
  },
  {
    key: 'partly-paid',
    buttonConfig: {
      variant: 'text',
      label: 'Partly Paid',
      type: 'button',
    },
  },
  {
    key: 'sent',
    buttonConfig: {
      variant: 'text',
      label: 'Sent',
      type: 'button',
    },
  },
  {
    key: 'seen',
    buttonConfig: {
      variant: 'text',
      label: 'Seen',
      type: 'button',
    },
  },
  {
    key: 'due',
    buttonConfig: {
      variant: 'text',
      label: 'Due',
      type: 'button',
    },
  },
  {
    key: 'debit-sale',
    buttonConfig: {
      variant: 'text',
      label: 'Debit Sale',
      type: 'button',
    },
  },
  {
    key: 'retail',
    buttonConfig: {
      variant: 'text',
      label: 'Retail',
      type: 'button',
    },
  },
];

// =====================================================
// TABLE CONFIG
// =====================================================

export const TABLE_CONFIG = {
  columns: TABLE_COLUMNS,
  actions: TABLE_ACTIONS,
  selectable: true,
  showActions: true,
  showPagination: true,
  emptyMessage: 'No sales invoices found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
