// src/app/features/bills-invoices/recurring-sales-invoices/recurring-sales-invoices.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import { IPageLayoutConfig, IPageLayout } from '@shared/components/page-layout/page-layout.types';

import { Pencil, Trash2, Calendar, Repeat, Eye, Info, ReceiptText, Search } from 'lucide-angular';

import { IRecurringSalesInvoice } from './recurring-sales-invoices.types';

// =====================================================
// PAGE LAYOUT
// =====================================================

export const PAGE_LAYOUT: IPageLayout = {
  showToolbar: true,
  showTabs: false,
  showTable: true,
};

// =====================================================
// SEARCH INPUT
// =====================================================

export const SEARCH_INPUT: InputConfig = {
  type: 'text',
  placeholder: 'Search recurring sales invoices...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IRecurringSalesInvoice>[] = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    icon: ReceiptText,
  },
  {
    key: 'status',
    label: 'Status',
    icon: Info,
  },
  {
    key: 'repeat',
    label: 'Repeat',
    icon: Repeat,
  },
  {
    key: 'startDate',
    label: 'Start Date',
    icon: Calendar,
  },
  {
    key: 'nextDate',
    label: 'Next Date',
    icon: Calendar,
  },
  {
    key: 'endDate',
    label: 'End Date',
    icon: Calendar,
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
// TABLE CONFIG
// =====================================================

export const TABLE_CONFIG = {
  columns: TABLE_COLUMNS,
  actions: TABLE_ACTIONS,
  selectable: true,
  showActions: true,
  showPagination: true,
  emptyMessage: 'No recurring sales invoices found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
