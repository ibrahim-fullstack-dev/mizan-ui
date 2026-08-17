// src/app/features/orders/purchase-orders/purchase-orders.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  Download,
  Pencil,
  Trash2,
  User,
  Hash,
  DollarSign,
  Info,
  Calendar,
  Plus,
  Eye,
} from 'lucide-angular';

import { IPurchaseOrder } from './purchase-orders.types';

// =====================================================
// PAGE LAYOUT
// =====================================================

export const PAGE_LAYOUT: IPageLayout = {
  showToolbar: true,
  showTabs: true,
  showTable: true,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IPurchaseOrder>[] = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    icon: Hash,
  },
  {
    key: 'supplierName',
    label: 'Supplier Name',
    icon: User,
  },
  {
    key: 'BranchName',
    label: 'Branch Name',
    icon: User,
  },
  {
    key: 'warehouseName',
    label: 'Warehouse Name',
    icon: User,
  },
  {
    key: 'Balance',
    label: 'Balance',
    icon: DollarSign,
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
      label: 'Add Purchase Order',
      variant: 'primary',
      icon: Plus,
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
// TABS
// =====================================================

export const TABS: IPageAction[] = [
  {
    key: 'all',
    buttonConfig: {
      label: 'All',
      variant: 'text',
      type: 'button',
    },
  },
  {
    key: 'pending',
    buttonConfig: {
      label: 'Pending',
      variant: 'text',
      type: 'button',
    },
  },
  {
    key: 'invoiced',
    buttonConfig: {
      label: 'Invoiced',
      variant: 'text',
      type: 'button',
    },
  },
  {
    key: 'accepted',
    buttonConfig: {
      label: 'Accepted',
      variant: 'text',
      type: 'button',
    },
  },
  {
    key: 'rejected',
    buttonConfig: {
      label: 'Rejected',
      variant: 'text',
      type: 'button',
    },
  },
];

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IDataPageConfig<IPurchaseOrder> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: TABS,

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No purchase orders found.',
  },
};
