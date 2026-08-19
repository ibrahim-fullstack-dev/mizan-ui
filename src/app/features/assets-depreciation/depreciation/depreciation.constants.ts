// src/app/features/assets-depreciation/depreciation/depreciation.constants.ts

import { TableColumn } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import { IPageLayoutConfig, IPageLayout } from '@shared/components/page-layout/page-layout.types';

import { ReceiptText, Calendar, Search } from 'lucide-angular';

import { IDepreciation } from './depreciation.types';

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
  placeholder: 'Search depreciation records...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IDepreciation>[] = [
  {
    key: 'reference',
    label: 'Reference',
    icon: ReceiptText,
  },
  {
    key: 'fromDate',
    label: 'From Date',
    icon: Calendar,
  },
  {
    key: 'toDate',
    label: 'To Date',
    icon: Calendar,
  },
];

// =====================================================
// TABLE CONFIG
// =====================================================

export const TABLE_CONFIG = {
  columns: TABLE_COLUMNS,
  selectable: false,
  showActions: false,
  showPagination: true,
  emptyMessage: 'No depreciation records found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
