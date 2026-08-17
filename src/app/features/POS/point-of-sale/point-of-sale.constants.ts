// src/app/features/POS/point-of-sale/point-of-sale.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  Hash,
  Pencil,
  Trash2,
  Info,
  Calendar,
  Building2,
  UserPlus,
  Warehouse,
  RotateCw,
} from 'lucide-angular';

import { IPointOfSale } from './point-of-sale.types';

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

export const TABLE_COLUMNS: TableColumn<IPointOfSale>[] = [
  {
    key: 'code',
    label: 'Code',
    icon: Hash,
  },
  {
    key: 'reference',
    label: 'Reference',
    icon: RotateCw,
  },
  {
    key: 'startAt',
    label: 'Start At',
    icon: Calendar,
  },
  {
    key: 'endAt',
    label: 'End At',
    icon: Calendar,
  },
  {
    key: 'branchName',
    label: 'Branch Name',
    icon: Building2,
  },
  {
    key: 'warehouseName',
    label: 'Warehouse Name',
    icon: Warehouse,
  },
  {
    key: 'date',
    label: 'Date',
    icon: Calendar,
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
      label: 'Add',
      variant: 'primary',
      icon: UserPlus,
      type: 'button',
    },
  },
  {
    key: 'delete',
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

export const DATA_PAGE_CONFIG: IDataPageConfig<IPointOfSale> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No points of sale found.',
  },
};
