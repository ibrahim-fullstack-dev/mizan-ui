// src/app/features/settings/country/country.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import { UserPlus, Pencil, Trash2, Hash, Phone, CircleEllipsis } from 'lucide-angular';

import { ICountry } from './country.types';

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

export const TABLE_COLUMNS: TableColumn<ICountry>[] = [
  {
    key: 'nameInArabic',
    label: 'Name in Arabic',
    icon: Hash,
  },
  {
    key: 'nameInEnglish',
    label: 'Name in English',
    icon: Hash,
  },
  {
    key: 'Code',
    label: 'Code',
    icon: CircleEllipsis,
  },
  {
    key: 'phoneCode',
    label: 'Phone Code',
    icon: Phone,
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
      label: 'Delete',
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

export const DATA_PAGE_CONFIG: IDataPageConfig<ICountry> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No countries found.',
  },
};
