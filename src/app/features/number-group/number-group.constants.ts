// src/app/features/number-group/number-group.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import {
  IPageLayoutConfig,
  IPageAction,
  IPageLayout,
} from '@shared/components/page-layout/page-layout.types';

import {
  Plus,
  Pencil,
  Trash2,
  ArrowBigRight,
  Hash,
  Info,
  Section,
  PanelLeftDashed,
  Ellipsis,
  Search,
} from 'lucide-angular';

import { INumberGroup } from './number-group.types';

// =====================================================
// PAGE LAYOUT
// =====================================================

export const PAGE_LAYOUT: IPageLayout = {
  showToolbar: true,
  showTabs: false,
  showTable: true,
};

// =====================================================
// SEARCH INPUT
// =====================================================

export const SEARCH_INPUT: InputConfig = {
  type: 'text',
  placeholder: 'Search number groups...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<INumberGroup>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: Hash,
  },
  {
    key: 'prefix',
    label: 'Prefix',
    icon: Ellipsis,
  },
  {
    key: 'next',
    label: 'Next',
    icon: ArrowBigRight,
  },
  {
    key: 'section',
    label: 'Section',
    icon: Section,
  },
  {
    key: 'leftPad',
    label: 'Left Pad',
    icon: PanelLeftDashed,
  },
  {
    key: 'yearPrefix',
    label: 'Year Prefix',
    icon: Ellipsis,
  },
  {
    key: 'monthPrefix',
    label: 'Month Prefix',
    icon: Ellipsis,
  },
  {
    key: 'status',
    label: 'Status',
    icon: Info,
  },
  {
    key: 'USED',
    label: 'USED',
    icon: Info,
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
  emptyMessage: 'No number groups found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
