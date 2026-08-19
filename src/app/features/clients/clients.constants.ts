// src/app/features/clients/clients.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import {
  IPageLayoutConfig,
  IPageLayout,
  IPageAction,
} from '@shared/components/page-layout/page-layout.types';

import { Download, Pencil, Trash2, User, Mail, Phone, Plus, Eye, Search } from 'lucide-angular';

import { IClient } from './clients.types';

// =====================================================
// PAGE LAYOUT
// =====================================================

export const PAGE_LAYOUT: IPageLayout = {
  showToolbar: true,
  showTabs: false,
  showTable: true,
  showPageHeader: true,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IClient>[] = [
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
    key: 'add',
    buttonConfig: {
      label: 'Add Client',
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
      label: 'Export',
      variant: 'outline',
      icon: Download,
      type: 'button',
    },
  },
];

// =====================================================
// SEARCH INPUT
// =====================================================

export const SEARCH_INPUT: InputConfig = {
  type: 'text',
  placeholder: 'Search clients...',
  icon: Search,
};

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
  emptyMessage: 'No clients found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
  title: 'Clients',
  subtitle: 'Manage your clients here.',
};
