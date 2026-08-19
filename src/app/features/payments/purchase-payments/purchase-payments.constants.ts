// src/app/features/payments/purchase-payments/purchase-payments.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import {
  IPageLayoutConfig,
  IPageAction,
  IPageLayout,
} from '@shared/components/page-layout/page-layout.types';

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
  Search,
} from 'lucide-angular';

import { IPurchasePayment } from './purchase-payments.types';

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
  placeholder: 'Search purchase payments...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IPurchasePayment>[] = [
  {
    key: 'payNumber',
    label: 'Pay Number',
    icon: Hash,
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
    key: 'paymentMethod',
    label: 'Payment Method',
    icon: ArrowLeftRight,
  },
  {
    key: 'amount',
    label: 'Amount',
    icon: DollarSign,
  },
  {
    key: 'branch',
    label: 'Branch',
    icon: Building2,
  },
  {
    key: 'date',
    label: 'Date',
    icon: Calendar,
  },
  {
    key: 'note',
    label: 'Note',
    icon: NotebookPen,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'add',
    buttonConfig: {
      label: 'Add Purchase Payment',
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
// TABLE CONFIG
// =====================================================

export const TABLE_CONFIG = {
  columns: TABLE_COLUMNS,
  actions: TABLE_ACTIONS,
  selectable: true,
  showActions: true,
  showPagination: true,
  emptyMessage: 'No purchase payments found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
