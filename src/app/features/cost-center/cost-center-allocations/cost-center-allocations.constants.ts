// src/app/features/cost-center/cost-center-allocations/cost-center-allocations.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  CreditCard,
  Info,
  Calendar,
  Plus,
  Eye,
  SquareSquare,
  Undo2,
  ArrowLeftRight,
  BookOpenText,
  FileText,
  CircleDollarSign,
} from 'lucide-angular';

import { ICostCenterAllocation } from './cost-center-allocations.types';

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

export const TABLE_COLUMNS: TableColumn<ICostCenterAllocation>[] = [
  {
    key: 'costCenter',
    label: 'Cost Center',
    icon: SquareSquare,
  },
  {
    key: 'ledgerReference',
    label: 'Ledger Reference',
    icon: BookOpenText,
  },
  {
    key: 'reference',
    label: 'Reference',
    icon: FileText,
  },
  {
    key: 'transactionType',
    label: 'Transaction Type',
    icon: ArrowLeftRight,
  },
  {
    key: 'credit',
    label: 'Credit',
    icon: CircleDollarSign,
  },
  {
    key: 'debit',
    label: 'Debit',
    icon: CircleDollarSign,
  },
  {
    key: 'status',
    label: 'Status',
    icon: Info,
  },
  {
    key: 'createdAt',
    label: 'Created At',
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
];

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IDataPageConfig<ICostCenterAllocation> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No cost center allocations found.',
  },
};
