// src/app/features/manufacturing/productions/productions.constants.ts

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
  Calendar,
  Building2,
  CaseSensitive,
  Boxes,
  Ruler,
  CircleDollarSign,
} from 'lucide-angular';

import { IProduction } from './productions.types';

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

export const TABLE_COLUMNS: TableColumn<IProduction>[] = [
  {
    key: 'operatingNumber',
    label: 'Operating Number',
    icon: Hash,
  },
  {
    key: 'ManufacturingEquationName',
    label: 'Manufacturing Equation Name',
    icon: CaseSensitive,
  },
  {
    key: 'productionDate',
    label: 'Production Date',
    icon: Calendar,
  },
  {
    key: 'fromBranch',
    label: 'From Branch',
    icon: Building2,
  },
  {
    key: 'toBranch',
    label: 'To Branch',
    icon: Building2,
  },
  {
    key: 'toWarehouse',
    label: 'To Warehouse',
    icon: Warehouse,
  },
  {
    key: 'quantity',
    label: 'Quantity',
    icon: Boxes,
  },
  {
    key: 'unitPrice',
    label: 'Unit Price',
    icon: Ruler,
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

export const DATA_PAGE_CONFIG: IDataPageConfig<IProduction> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No productions found.',
  },
};
