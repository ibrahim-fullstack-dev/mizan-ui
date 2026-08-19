// src/app/features/payments/sale-settlements/sale-settlements.constants.ts

import { TableColumn } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';

import { IPageLayoutConfig, IPageLayout } from '@shared/components/page-layout/page-layout.types';

import { Calendar, Hash, User, DollarSign, Building2, Search } from 'lucide-angular';

import { ISaleSettlement } from './sale-settlements.types';

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
  placeholder: 'Search sale settlements...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<ISaleSettlement>[] = [
  {
    key: 'saleInvoiceNumber',
    label: 'Sale Invoice Number',
    icon: Hash,
  },
  {
    key: 'saleDate',
    label: 'Sale Date',
    icon: Calendar,
  },
  {
    key: 'settlementDate',
    label: 'Settlement Date',
    icon: Calendar,
  },
  {
    key: 'clientName',
    label: 'Client Name',
    icon: User,
  },
  {
    key: 'branch',
    label: 'Branch',
    icon: Building2,
  },
  {
    key: 'salesUser',
    label: 'Sales User',
    icon: User,
  },
  {
    key: 'settlementUser',
    label: 'Settlement User',
    icon: User,
  },
  {
    key: 'settlementAmount',
    label: 'Settlement Amount',
    icon: DollarSign,
  },
  {
    key: 'invoiceTotal',
    label: 'Invoice Total',
    icon: DollarSign,
  },
  {
    key: 'totalPaid',
    label: 'Total Paid',
    icon: DollarSign,
  },
  {
    key: 'remaining',
    label: 'Remaining',
    icon: DollarSign,
  },
];

// =====================================================
// TABLE CONFIG
// =====================================================

export const TABLE_CONFIG = {
  columns: TABLE_COLUMNS,
  selectable: true,
  showActions: false,
  showPagination: true,
  emptyMessage: 'No sale settlements found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
