// src/app/features/expenses/repeat-expenses-list/repeat-expenses-list.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  Download,
  Pencil,
  Trash2,
  RotateCw,
  Calendar,
  ChartBarStacked,
  Eye,
  RotateCcw,
  Info,
  Plus,
} from 'lucide-angular';

import { IRepeatExpense } from './repeat-expenses-list.types';

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

export const TABLE_COLUMNS: TableColumn<IRepeatExpense>[] = [
  {
    key: 'referenceNumber',
    label: 'Reference Number',
    icon: RotateCw,
  },
  {
    key: 'expenseCategory',
    label: 'Expense Category',
    icon: ChartBarStacked,
  },
  {
    key: 'active',
    label: 'Active',
    icon: Info,
  },
  {
    key: 'startDate',
    label: 'Start Date',
    icon: Calendar,
  },
  {
    key: 'endDate',
    label: 'End Date',
    icon: Calendar,
  },
  {
    key: 'repeat',
    label: 'Repeat',
    icon: RotateCcw,
  },
  {
    key: 'nextDate',
    label: 'Next Date',
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

export const DATA_PAGE_CONFIG: IDataPageConfig<IRepeatExpense> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No repeat expenses found.',
  },
};
