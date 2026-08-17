// src/app/features/bills-invoices/recurring-purchase-invoices/recurring-purchase-invoices.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageLayout } from '@core/data-page/data-page.types';

import { Pencil, Trash2, Hash, Calendar, Repeat, Eye, Info, ReceiptText } from 'lucide-angular';

import { IRecurringPurchaseInvoice } from './recurring-purchase-invoices.types';

// =====================================================
// PAGE LAYOUT
// =====================================================

export const PAGE_LAYOUT: IPageLayout = {
  showToolbar: true,
  showTabs: false,
  showTable: true,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IRecurringPurchaseInvoice>[] = [
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
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IDataPageConfig<IRecurringPurchaseInvoice> = {
  layout: PAGE_LAYOUT,

  headerButtons: [],

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No recurring purchase invoices found.',
  },
};
