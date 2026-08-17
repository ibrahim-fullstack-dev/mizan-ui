// src/app/features/POS/point-of-sale/point-of-sale.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  Pencil,
  Trash2,
  Calendar,
  Eye,
  Hash,
  Plus,
  User,
  DollarSign,
  ArrowLeftRight,
  Download,
} from 'lucide-angular';

import { ISupplierPayment } from './supplier-payments.types';

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

export const TABLE_COLUMNS: TableColumn<ISupplierPayment>[] = [
  {
    key: 'payNumber',
    label: 'Pay Number',
    icon: Hash,
  },
  {
    key: 'supplierName',
    label: 'Supplier Name',
    icon: User,
  },
  {
    key: 'paymentMethod',
    label: 'Payment Method',
    icon: ArrowLeftRight,
  },
  {
    key: 'amount',
    label: 'Amount',
    icon: DollarSign,
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
      label: 'Add Supplier Payment',
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

export const DATA_PAGE_CONFIG: IDataPageConfig<ISupplierPayment> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No supplier payments found.',
  },
};
