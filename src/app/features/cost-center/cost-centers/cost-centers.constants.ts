// src/app/features/cost-center/cost-centers/cost-centers.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  UserPlus,
  Pencil,
  Trash2,
  Calendar,
  Eye,
  Hash,
  Type,
  Info,
  Languages,
  FileCode,
} from 'lucide-angular';

import { ICostCenter } from './cost-centers.types';

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

export const TABLE_COLUMNS: TableColumn<ICostCenter>[] = [
  {
    key: 'nameInArabic',
    label: 'Name in Arabic',
    icon: Languages,
  },
  {
    key: 'nameInEnglish',
    label: 'Name in English',
    icon: Languages,
  },
  {
    key: 'code',
    label: 'Code',
    icon: FileCode,
  },
  {
    key: 'type',
    label: 'Type',
    icon: Type,
  },
  {
    key: 'status',
    label: 'Status',
    icon: Info,
  },
  {
    key: 'startDate',
    label: 'Start Date',
    icon: Calendar,
  },
  {
    key: 'endDate',
    label: 'End Date',
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
      label: 'Add Cost Center',
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

export const DATA_PAGE_CONFIG: IDataPageConfig<ICostCenter> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No cost centers found.',
  },
};
