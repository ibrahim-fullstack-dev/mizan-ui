// src/app/features/expenses/expenses-list/expenses-list.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  Download,
  Pencil,
  Trash2,
  RotateCw,
  Building2,
  CircleDollarSign,
  Calendar,
  NotebookPen,
  ChartBarStacked,
  Eye,
  CreditCard,
  Type,
  Plus,
} from 'lucide-angular';

import { IExpense } from './expenses-list.types';

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

export const TABLE_COLUMNS: TableColumn<IExpense>[] = [
  {
    key: 'referenceNumber',
    label: 'Reference Number',
    icon: RotateCw,
  },
  {
    key: 'expenseNote',
    label: 'Expense Note',
    icon: NotebookPen,
  },
  {
    key: 'expenseCategory',
    label: 'Expense Category',
    icon: ChartBarStacked,
  },
  {
    key: 'date',
    label: 'Date',
    icon: Calendar,
  },
  {
    key: 'branch',
    label: 'Branch',
    icon: Building2,
  },
  {
    key: 'paymentMethod',
    label: 'Payment Method',
    icon: CreditCard,
  },
  {
    key: 'type',
    label: 'Type',
    icon: Type,
  },
  {
    key: 'taxableAmount',
    label: 'Taxable Amount',
    icon: CircleDollarSign,
  },
  {
    key: 'taxAmount',
    label: 'Tax Amount',
    icon: CircleDollarSign,
  },
  {
    key: 'totalAmount',
    label: 'Total Amount',
    icon: CircleDollarSign,
  },
  {
    key: 'publicNote',
    label: 'Public Note',
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
      label: 'Add Expense',
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
      label: 'View',
      icon: Eye,
      variant: 'text',
      type: 'button',
    },
  },
  {
    action: 'edit',
    button: {
      label: 'Edit',
      icon: Pencil,
      variant: 'text',
      type: 'button',
    },
  },
  {
    action: 'delete',
    button: {
      label: 'Delete',
      icon: Trash2,
      variant: 'danger',
      type: 'button',
    },
  },
];

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IDataPageConfig<IExpense> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No expenses found.',
  },
};
