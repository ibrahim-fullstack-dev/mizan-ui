// src/app/features/warehouse/products-lists/products-lists.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

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

export const DATA_PAGE_CONFIG: IDataPageConfig<IProductList> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No products found.',
  },
};
