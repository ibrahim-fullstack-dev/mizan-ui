// src/app/features/damages/damages.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  UserPlus,
  Download,
  Pencil,
  Trash2,
  RotateCw,
  ShieldX,
  Building2,
  Warehouse,
  CircleDollarSign,
  Calendar,
  NotebookPen,
  Eye,
} from 'lucide-angular';

import { IDamage } from './damages.types';

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

export const TABLE_COLUMNS: TableColumn<IDamage>[] = [
  {
    key: 'referenceNumber',
    label: 'Reference Number',
    icon: RotateCw,
  },
  {
    key: 'name',
    label: 'Name',
    icon: ShieldX,
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
    key: 'totalAmountRecovered',
    label: 'Total Amount Recovered',
    icon: CircleDollarSign,
  },
  {
    key: 'date',
    label: 'Date',
    icon: Calendar,
  },
  {
    key: 'notes',
    label: 'Notes',
    icon: NotebookPen,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'add',
    buttonConfig: {
      label: 'Add Damage',
      variant: 'primary',
      icon: UserPlus,
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

export const DATA_PAGE_CONFIG: IDataPageConfig<IDamage> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No damages found.',
  },
};
