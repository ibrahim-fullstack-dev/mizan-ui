// src/app/features/bills-invoices/purchase-returns/purchase-returns.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  Eye,
  Download,
  Pencil,
  Trash2,
  User,
  CircleDollarSign,
  Hash,
  Plus,
  Building2,
  Info,
  Calendar,
  ReceiptText,
} from 'lucide-angular';

import { IPurchaseReturn } from './purchase-returns.types';

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

export const TABLE_COLUMNS: TableColumn<IPurchaseReturn>[] = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    icon: ReceiptText,
  },
  {
    key: 'purchaseInvoiceNumber',
    label: 'Purchase Invoice Number',
    icon: Hash,
  },
  {
    key: 'supplierName',
    label: 'Supplier Name',
    icon: User,
  },
  {
    key: 'branchName',
    label: 'Branch Name',
    icon: Building2,
  },
  {
    key: 'totalPrice',
    label: 'Total Price',
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
    key: 'returnDate',
    label: 'Return Date',
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
    key: 'export-pdf',
    buttonConfig: {
      label: 'Export PDF',
      variant: 'outline',
      icon: Download,
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

export const DATA_PAGE_CONFIG: IDataPageConfig<IPurchaseReturn> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No purchase returns found.',
  },
};
