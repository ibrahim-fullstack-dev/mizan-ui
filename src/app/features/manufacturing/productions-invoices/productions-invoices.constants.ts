// src/app/features/manufacturing/productions-invoices/productions-invoices.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  Download,
  Pencil,
  Trash2,
  Hash,
  Plus,
  Eye,
  Warehouse,
  Building2,
  Calendar,
  CircleDollarSign,
} from 'lucide-angular';

import { IProductionInvoice } from './productions-invoices.types';

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

export const TABLE_COLUMNS: TableColumn<IProductionInvoice>[] = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    icon: Hash,
  },
  {
    key: 'ProductionProductName',
    label: 'Product Name',
    icon: Hash,
  },
  {
    key: 'branch',
    label: 'Branch',
    icon: Building2,
  },
  {
    key: 'warehouse',
    label: 'Warehouse',
    icon: Warehouse,
  },
  {
    key: 'date',
    label: 'Date',
    icon: Calendar,
  },
  {
    key: 'totalPrice',
    label: 'Total Price',
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
      label: 'Add',
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
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IDataPageConfig<IProductionInvoice> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No production invoices found.',
  },
};
