// src/app/features/assets-depreciation/assets/assets.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IPageAction, IDataPageConfig, IPageLayout } from '@core/data-page/data-page.types';

import {
  Pencil,
  Trash2,
  Eye,
  Hash,
  Plus,
  ChartColumnStacked,
  CircleDollarSign,
  Building2,
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
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IAsset>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: Hash,
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
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IDataPageConfig<IAsset> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No assets found.',
  },
};
