// src/app/features/warehouse/products-lists/products-lists.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import {
  IPageLayoutConfig,
  IPageAction,
  IPageLayout,
} from '@shared/components/page-layout/page-layout.types';

import {
  Plus,
  Download,
  Pencil,
  Trash2,
  User,
  TableOfContents,
  Type,
  CirclePile,
  Component,
  CircleDollarSign,
  QrCode,
  Search,
} from 'lucide-angular';

import { IProductList } from './products-lists.types';

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
  placeholder: 'Search products...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IProductList>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: User,
  },
  {
    key: 'type',
    label: 'Type',
    icon: Type,
  },
  {
    key: 'stock',
    label: 'Stock Remaining',
    icon: CirclePile,
  },
  {
    key: 'category',
    label: 'Category',
    icon: TableOfContents,
  },
  {
    key: 'sku',
    label: 'SKU',
    icon: Component,
  },
  {
    key: 'defaultSalePrice',
    label: 'Default Sale Price',
    icon: CircleDollarSign,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'qr-code',
    buttonConfig: {
      label: 'QR Code',
      variant: 'secondary',
      icon: QrCode,
      type: 'button',
    },
  },
  {
    key: 'add-product',
    buttonConfig: {
      label: 'Add Product',
      variant: 'secondary',
      icon: Plus,
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
  emptyMessage: 'No products found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
