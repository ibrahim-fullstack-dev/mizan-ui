// src/app/features/cost-center/estimated-budget/estimated-budget.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  UserPlus,
  Pencil,
  Trash2,
  Calendar,
  Eye,
  FileCode,
  Type,
  Info,
  SquareSquare,
  FileText,
} from 'lucide-angular';

import { IEstimatedBudget } from './estimated-budget.types';

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

export const TABLE_COLUMNS: TableColumn<IEstimatedBudget>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: FileText,
  },
  {
    key: 'code',
    label: 'Code',
    icon: FileCode,
  },
  {
    key: 'periodType',
    label: 'Period Type',
    icon: Type,
  },
  {
    key: 'periodStart',
    label: 'Period Start',
    icon: Calendar,
  },
  {
    key: 'periodEnd',
    label: 'Period End',
    icon: Calendar,
  },
  {
    key: 'budgetYear',
    label: 'Budget Year',
    icon: Calendar,
  },
  {
    key: 'costCenter',
    label: 'Cost Center',
    icon: SquareSquare,
  },
  {
    key: 'status',
    label: 'Status',
    icon: Info,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'add',
    buttonConfig: {
      label: 'Add Estimated Budget',
      variant: 'primary',
      icon: UserPlus,
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

export const DATA_PAGE_CONFIG: IDataPageConfig<IEstimatedBudget> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No estimated budgets found.',
  },
};
