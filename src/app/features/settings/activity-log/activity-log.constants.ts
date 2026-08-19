// src/app/features/settings/activity-log/activity-log.constants.ts

import { TableColumn } from '@components/table/table.types';
import { InputConfig } from '@components/input/input.types';
import { ISelectConfig } from '@components/select/select.types';

import { IPageLayoutConfig, IPageLayout } from '@shared/components/page-layout/page-layout.types';

import { Hash, FileText, Type, ArrowUpDown, Calendar, Search } from 'lucide-angular';

import { IActivityLog } from './activity-log.types';

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
  placeholder: 'Search activity logs...',
  icon: Search,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IActivityLog>[] = [
  {
    key: 'logName',
    label: 'Log Name',
    icon: Hash,
  },
  {
    key: 'description',
    label: 'Description',
    icon: FileText,
  },
  {
    key: 'subjectType',
    label: 'Subject Type',
    icon: Type,
  },
  {
    key: 'event',
    label: 'Event',
    icon: ArrowUpDown,
  },
  {
    key: 'createdDate',
    label: 'Created Date',
    icon: Calendar,
  },
  {
    key: 'updatedDate',
    label: 'Updated Date',
    icon: Calendar,
  },
];

// =====================================================
// FILTERS
// =====================================================

export const SUBJECT_SELECT_OPTIONS: ISelectConfig = {
  label: 'Subject',
  placeholder: 'Select a subject...',
  required: true,
  options: [
    { label: 'account', value: 'Account' },
    { label: 'Accounting Type', value: 'Accounting Type' },
    { label: 'Activity', value: 'Activity' },
    { label: 'Asset', value: 'Asset' },
    { label: 'Asset Category', value: 'Asset Category' },
    { label: 'Asset Operation', value: 'Asset Operation' },
    { label: 'Bank Account', value: 'Bank Account' },
    { label: 'Branch', value: 'Branch' },
    { label: 'Brand', value: 'Brand' },
    { label: 'Business', value: 'Business' },
    { label: 'Category', value: 'Category' },
    { label: 'Client', value: 'Client' },
    { label: 'Client Group', value: 'Client Group' },
    { label: 'Client Payment', value: 'Client Payment' },
    { label: 'Closing Year', value: 'Closing Year' },
    { label: 'Combo', value: 'Combo' },
    { label: 'Company', value: 'Company' },
    { label: 'Country', value: 'Country' },
    { label: 'Currency', value: 'Currency' },
    { label: 'Custom Field', value: 'Custom Field' },
    { label: 'Demaged Stock', value: 'Demaged Stock' },
    { label: 'Demaged Stock Detail', value: 'Demaged Stock Detail' },
    { label: 'Debug Error', value: 'Debug Error' },
    { label: 'Depreciation', value: 'Depreciation' },
    { label: 'Depreciation Category', value: 'Depreciation Category' },
    { label: 'Discount', value: 'Discount' },
    { label: 'Discount Price List', value: 'Discount Price List' },
    { label: 'Discount Variation', value: 'Discount Variation' },
    { label: 'Document', value: 'Document' },
    { label: 'Entry', value: 'Entry' },
    { label: 'Entry Year', value: 'Entry Year' },
    { label: 'Expense', value: 'Expense' },
    { label: 'Expense Category', value: 'Expense Category' },
    { label: 'Integration', value: 'Integration' },
    { label: 'Ledger', value: 'Ledger' },
    { label: 'Manufacturing Equation', value: 'Manufacturing Equation' },
    {
      label: 'Manufacturing Equation Expense',
      value: 'Manufacturing Equation Expense',
    },
    {
      label: 'Manufacturing Equation Item',
      value: 'Manufacturing Equation Item',
    },
    {
      label: 'Manufacturing Equation Spoilage',
      value: 'Manufacturing Equation Spoilage',
    },
    {
      label: 'Manufacturing Equation Support Item',
      value: 'Manufacturing Equation Support Item',
    },
    { label: 'Media', value: 'Media' },
    { label: 'Number Group', value: 'Number Group' },
    { label: 'OTP Verification', value: 'OTP Verification' },
    { label: 'Package', value: 'Package' },
    { label: 'Package Service', value: 'Package Service' },
    { label: 'Payment Fee', value: 'Payment Fee' },
    { label: 'Payment Method', value: 'Payment Method' },
    { label: 'Permissions', value: 'Permissions' },
    { label: 'POS', value: 'POS' },
    { label: 'POS Payment Method', value: 'POS Payment Method' },
    { label: 'POS Session', value: 'POS Session' },
    { label: 'Price List', value: 'Price List' },
    { label: 'Price List Product', value: 'Price List Product' },
    { label: 'Product', value: 'Product' },
    { label: 'Product Branch', value: 'Product Branch' },
    { label: 'Product Variation', value: 'Product Variation' },
    { label: 'Production', value: 'Production' },
    { label: 'Production Purchase', value: 'Production Purchase' },
    { label: 'Production Setting', value: 'Production Setting' },
    { label: 'Purchase', value: 'Purchase' },
    { label: 'Purchase Details', value: 'Purchase Details' },
    { label: 'Purchase Payment', value: 'Purchase Payment' },
    { label: 'Purchases & Sales', value: 'Purchases & Sales' },
    { label: 'Ready List', value: 'Ready List' },
    { label: 'Repeat', value: 'Repeat' },
    { label: 'Returned Purchase Payment', value: 'Returned Purchase Payment' },
    { label: 'Role', value: 'Role' },
    { label: 'Sale', value: 'Sale' },
    { label: 'Sales Detail', value: 'Sales Detail' },
    { label: 'Sales Payment', value: 'Sales Payment' },
    { label: 'Serail', value: 'Serail' },
    { label: 'Service', value: 'Service' },
    { label: 'Setting', value: 'Setting' },
    { label: 'Stock', value: 'Stock' },
    { label: 'Stock History', value: 'Stock History' },
    { label: 'Subscription', value: 'Subscription' },
    { label: 'Supplier', value: 'Supplier' },
    { label: 'Supplier Payment', value: 'Supplier Payment' },
    { label: 'Tax', value: 'Tax' },
    { label: 'Template', value: 'Template' },
    { label: 'Tenant', value: 'Tenant' },
    { label: 'Tenant Package Details', value: 'Tenant Package Details' },
    { label: 'Transfer Order', value: 'Transfer Order' },
    { label: 'Transfer Order Item', value: 'Transfer Order Item' },
    { label: 'Unit', value: 'Unit' },
    { label: 'User', value: 'User' },
    { label: 'User Branch', value: 'User Branch' },
    { label: 'User Number Group', value: 'User Number Group' },
    { label: 'User Payment Method', value: 'User Payment Method' },
    { label: 'Variation', value: 'Variation' },
    { label: 'Variation Template', value: 'Variation Template' },
    { label: 'Variation Template Value', value: 'Variation Template Value' },
    { label: 'Warehouse', value: 'Warehouse' },
    { label: 'Warehouse Position', value: 'Warehouse Position' },
    { label: 'Warranty', value: 'Warranty' },
  ],
};

export const EVENT_SELECT_OPTIONS: ISelectConfig = {
  label: 'Event',
  placeholder: 'Select an event...',
  required: true,
  options: [
    { label: 'created', value: 'Created' },
    { label: 'Updated', value: 'Updated' },
    { label: 'Deleted', value: 'Deleted' },
  ],
};

export const PERIOD_SELECT_OPTIONS: ISelectConfig = {
  label: 'Period',
  placeholder: 'Select a period...',
  required: true,
  options: [
    { label: 'today', value: 'Today' },
    { label: 'yesterday', value: 'Yesterday' },
    { label: 'last 7 days', value: 'Last 7 Days' },
    { label: 'last 30 days', value: 'Last 30 Days' },
    { label: 'last 90 days', value: 'Last 90 Days' },
    { label: 'this month', value: 'This Month' },
    { label: 'last month', value: 'Last Month' },
    { label: 'this year', value: 'This Year' },
    { label: 'last year', value: 'Last Year' },
    { label: 'custom', value: 'Custom' },
  ],
};

// =====================================================
// TABLE CONFIG
// =====================================================

export const TABLE_CONFIG = {
  columns: TABLE_COLUMNS,
  selectable: true,
  showActions: false,
  showPagination: true,
  emptyMessage: 'No activity logs found.',
};

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IPageLayoutConfig = {
  layout: PAGE_LAYOUT,
};
