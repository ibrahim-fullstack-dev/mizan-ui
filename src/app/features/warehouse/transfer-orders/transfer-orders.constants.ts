// src/app/features/warehouse/transfer-orders/transfer-orders.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import {
  IPageLayoutConfig,
  IPageAction,
  IPageLayout,
} from '@shared/components/page-layout/page-layout.types';

import {
  Plus,
  Eye,
  Pencil,
  Trash2,
  Warehouse,
  RotateCw,
  Boxes,
  Building2,
  Info,
  Calendar,
  Search,
} from 'lucide-angular';

import { ITransferOrder } from './transfer-orders.types';

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
  placeholder: 'Search transfer orders...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<ITransferOrder>[] = [
  {
    key: 'referenceName',
    label: 'Reference Name',
    icon: RotateCw,
  },
  {
    key: 'sourceBranch',
    label: 'Source Branch',
    icon: Building2,
  },
  {
    key: 'DestinationBranch',
    label: 'Destination Branch',
    icon: Building2,
  },
  {
    key: 'sourceWarehouse',
    label: 'Source Warehouse',
    icon: Warehouse,
  },
  {
    key: 'destinationWarehouse',
    label: 'Destination Warehouse',
    icon: Warehouse,
  },
  {
    key: 'totalQuantity',
    label: 'Total Quantity',
    icon: Boxes,
  },
  {
    key: 'status',
    label: 'Status',
    icon: Info,
  },
  {
    key: 'transferDate',
    label: 'Transfer Date',
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
  emptyMessage: 'No transfer orders found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
