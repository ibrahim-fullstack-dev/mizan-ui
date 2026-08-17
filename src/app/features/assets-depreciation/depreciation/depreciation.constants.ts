// src/app/features/assets-depreciation/depreciation/depreciation.constants.ts

import { TableColumn } from '@components/table/table.types';

import { IDataPageConfig, IPageLayout } from '@core/data-page/data-page.types';

import { ReceiptText, Calendar } from 'lucide-angular';

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
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IDataPageConfig<IDepreciation> = {
  layout: PAGE_LAYOUT,

  headerButtons: [],

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    selectable: false,

    showActions: false,

    showPagination: true,

    emptyMessage: 'No depreciation records found.',
  },
};
