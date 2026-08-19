// src/app/features/bills-invoices/credit-notes/credit-notes.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import {
  IPageAction,
  IPageLayoutConfig,
  IPageLayout,
} from '@shared/components/page-layout/page-layout.types';

import {
  Download,
  Pencil,
  Trash2,
  User,
  Hash,
  DollarSign,
  CircleDollarSign,
  Info,
  Calendar,
  Plus,
  Eye,
  Search,
} from 'lucide-angular';

import { ICreditNote } from './credit-notes.types';

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
  placeholder: 'Search credit notes...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<ICreditNote>[] = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    icon: Hash,
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
    icon: DollarSign,
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
  emptyMessage: 'No credit notes found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
