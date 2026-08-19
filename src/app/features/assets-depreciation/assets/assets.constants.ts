// src/app/features/assets-depreciation/assets/assets.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import {
  IPageAction,
  IPageLayoutConfig,
  IPageLayout,
} from '@shared/components/page-layout/page-layout.types';

import { InputConfig } from '@components/input/input.types';

import {
  Pencil,
  Trash2,
  Eye,
  Tag,
  Plus,
  ChartColumnStacked,
  CircleDollarSign,
  Building2,
  Search,
} from 'lucide-angular';

import { IAsset } from './assets.types';

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
  placeholder: 'Search assets...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IAsset>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: Tag,
  },
  {
    key: 'branch',
    label: 'Branch',
    icon: Building2,
  },
  {
    key: 'assetCategory',
    label: 'Asset Category',
    icon: ChartColumnStacked,
  },
  {
    key: 'ledgerValue',
    label: 'Ledger Value',
    icon: CircleDollarSign,
  },
  {
    key: 'purchaseValue',
    label: 'Purchase Value',
    icon: CircleDollarSign,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'add',
    buttonConfig: {
      label: 'Add Asset',
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
  emptyMessage: 'No assets found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
