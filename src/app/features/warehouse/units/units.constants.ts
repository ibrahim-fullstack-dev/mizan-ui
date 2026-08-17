// src/app/features/warehouse/units/units.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import { Plus, Eye, Pencil, Trash2, DecimalsArrowRight, Hash } from 'lucide-angular';

import { IUnit } from './units.types';

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

export const TABLE_COLUMNS: TableColumn<IUnit>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: Hash,
  },
  {
    key: 'shortName',
    label: 'Short Name',
    icon: Hash,
  },
  {
    key: 'useFraction',
    label: 'Use Fraction',
    icon: DecimalsArrowRight,
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

export const DATA_PAGE_CONFIG: IDataPageConfig<IUnit> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No units found.',
  },
};
