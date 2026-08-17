// src/app/features/suppliers/suppliers.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import { UserPlus, Download, Pencil, Trash2, User, Mail, Phone, Eye } from 'lucide-angular';

import { ISupplier } from './suppliers.types';

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

export const TABLE_COLUMNS: TableColumn<ISupplier>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: User,
  },
  {
    key: 'email',
    label: 'Email Address',
    icon: Mail,
  },
  {
    key: 'contact',
    label: 'Contact Number',
    icon: Phone,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'add-supplier',
    buttonConfig: {
      label: 'Add Supplier',
      variant: 'primary',
      icon: UserPlus,
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

export const DATA_PAGE_CONFIG: IDataPageConfig<ISupplier> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No suppliers found.',
  },
};
