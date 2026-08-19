// src/app/features/assets-depreciation/assets-category/assets-category.constants.ts

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
  CircleUserRound,
  Calculator,
  Search,
} from 'lucide-angular';

import { IAssetCategory } from './assets-category.types';

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
  placeholder: 'Search asset categories...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IAssetCategory>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: Tag,
  },
  {
    key: 'accountName',
    label: 'Account Name',
    icon: CircleUserRound,
  },
  {
    key: 'depreciationName',
    label: 'Depreciation Name',
    icon: Calculator,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'add',
    buttonConfig: {
      label: 'Add Asset Category',
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
  emptyMessage: 'No asset categories found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
