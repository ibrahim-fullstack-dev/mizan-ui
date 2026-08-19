// src/app/features/cost-center/cost-center-rules/cost-center-rules.constants.ts

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
  Info,
  Calendar,
  Plus,
  Eye,
  ReceiptText,
  CircleUserRound,
  CircleDollarSign,
  Search,
} from 'lucide-angular';

import { ICostCenterRule } from './cost-center-rules.types';

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
  placeholder: 'Search cost center rules...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<ICostCenterRule>[] = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    icon: ReceiptText,
  },
  {
    key: 'clientName',
    label: 'Client Name',
    icon: CircleUserRound,
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
    key: 'open',
    buttonConfig: {
      variant: 'text',
      label: 'Open',
      type: 'button',
    },
  },
  {
    key: 'invoiced',
    buttonConfig: {
      variant: 'text',
      label: 'Invoiced',
      type: 'button',
    },
  },
  {
    key: 'accepted',
    buttonConfig: {
      variant: 'text',
      label: 'Accepted',
      type: 'button',
    },
  },
  {
    key: 'rejected',
    buttonConfig: {
      variant: 'text',
      label: 'Rejected',
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
  emptyMessage: 'No cost center rules found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
