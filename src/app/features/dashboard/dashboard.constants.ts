// src/app/features/dashboard/dashboard.constants.ts
import { TableColumn, TableConfig } from '@components/table/table.types';
import { IButtonGroupItem } from '../../shared/components/button-group/button-group.types';
import { IAnalyticsCardItem } from '../../shared/components/analytics-breakdown/analytics-breakdown.types';
import {
  UserPlus,
  FilePlus,
  FileText,
  Truck,
  Receipt,
  Box,
  ArrowDownLeft,
  Wallet,
  ArrowUpRight,
  Users,
  Hash,
  Split,
  Calendar,
  User,
  Warehouse,
  Type,
  Info,
  DollarSign,
  CirclePile,
} from 'lucide-angular';
import { APP_ROUTES } from '../../core/constants/routes.constants';

// src/app/features/dashboard/dashboard.constants.ts

import { IAlert, IUnpaidSales } from './dashboard.types';

// =====================================================
// ALERTS TABLE
// =====================================================

export const ALERTS_TABLE_COLUMNS: TableColumn<IAlert>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: User,
  },
  {
    key: 'SKU',
    label: 'SKU',
    icon: Hash,
  },
  {
    key: 'Branch',
    label: 'Branch',
    icon: Split,
  },
  {
    key: 'date',
    label: 'Date',
    icon: Calendar,
  },
  {
    key: 'stock',
    label: 'Stock',
    icon: CirclePile,
  },
];

export const ALERTS_TABLE_CONFIG: TableConfig<IAlert> = {
  data: [],

  columns: ALERTS_TABLE_COLUMNS,

  selectable: false,

  showActions: false,

  showPagination: false,

  emptyMessage: 'No alerts found.',

  totalItems: 0,

  pageSize: 10,

  currentPage: 1,
};

export const UNPAID_SALES_TABLE_COLUMNS: TableColumn<IUnpaidSales>[] = [
  {
    key: 'invoiceNumber',
    label: 'Invoice Number',
    icon: Hash,
  },
  {
    key: 'clientName',
    label: 'Client Name',
    icon: User,
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
    key: 'branch',
    label: 'Branch',
    icon: Split,
  },
  {
    key: 'warehouse',
    label: 'Warehouse',
    icon: Warehouse,
  },
  {
    key: 'price',
    label: 'Price',
    icon: DollarSign,
  },
];

export const UNPAID_SALES_TABLE_CONFIG: TableConfig<IUnpaidSales> = {
  data: [],

  columns: UNPAID_SALES_TABLE_COLUMNS,

  selectable: false,

  showActions: false,

  showPagination: false,

  emptyMessage: 'No unpaid sales found.',

  totalItems: 0,

  pageSize: 10,

  currentPage: 1,
};

export const BUTTON_GROUP: IButtonGroupItem[] = [
  {
    title: 'Add Client',
    description: 'Create a new client profile',
    icon: UserPlus,
    link: `/${APP_ROUTES.clients.root}/${APP_ROUTES.clients.import}`,
  },
  {
    title: 'Add Offer',
    description: 'Generate a new sales quotation',
    icon: FilePlus,
    link: `/${APP_ROUTES.offers}`,
  },
  {
    title: 'Sales Invoice',
    description: 'Create a direct sales invoice',
    icon: FileText,
    link: `/${APP_ROUTES.bills.root}/${APP_ROUTES.bills.salesInvoicesList}`,
  },
  {
    title: 'Add Supplier',
    description: 'Register a new supplier profile',
    icon: Truck,
    link: `/${APP_ROUTES.suppliers.root}/${APP_ROUTES.suppliers.import}`,
  },
  {
    title: 'Purchase Invoice',
    description: 'Record an incoming purchase bill',
    icon: Receipt,
    link: `/${APP_ROUTES.bills.root}/${APP_ROUTES.bills.PurchaseInvoices}`,
  },
  {
    title: 'Add Product',
    description: 'Add items to the warehouse catalog',
    icon: Box,
    link: `/${APP_ROUTES.warehouse.root}/${APP_ROUTES.warehouse.importProducts}`,
  },
  {
    title: 'Sale Payment',
    description: 'Record a receipt voucher from a client',
    icon: ArrowDownLeft,
    link: `/${APP_ROUTES.payments.root}/${APP_ROUTES.payments.salePayments}`,
  },
  {
    title: 'Add Expense',
    description: 'Log a new operating expense voucher',
    icon: Wallet,
    link: `/${APP_ROUTES.expenses.root}/${APP_ROUTES.expenses.importExpenses}`,
  },
  {
    title: 'Purchase Payment',
    description: 'Record a payment voucher to a supplier',
    icon: ArrowUpRight,
    link: `/${APP_ROUTES.payments.root}/${APP_ROUTES.payments.purchasePayments}`,
  },
];

export const ANALYTICS_CARDS: IAnalyticsCardItem[] = [
  {
    id: 'purchase',
    title: 'Purchase',
    description: 'Unpaid Purchase ',
    value: '$14,250.00',
    icon: Wallet,
    link: `/${APP_ROUTES.orders.root}/${APP_ROUTES.orders.purchaseOrders}`,
    colorType: 'green',
  },
  {
    id: 'sales',
    title: 'Sales',
    description: 'Unpaid Sales',
    value: '1,248',
    icon: Users,
    link: `/${APP_ROUTES.orders.root}/${APP_ROUTES.orders.saleOrders}`,
    colorType: 'red',
  },
  {
    id: 'sales',
    title: 'Sales',
    description: 'Unpaid Sales',
    value: '1,248',
    icon: Users,
    link: `/${APP_ROUTES.orders.root}/${APP_ROUTES.orders.saleOrders}`,
    colorType: 'purple',
  },
  {
    id: 'sales',
    title: 'Sales',
    description: 'Unpaid Sales',
    value: '1,248',
    icon: Users,
    link: `/${APP_ROUTES.orders.root}/${APP_ROUTES.orders.saleOrders}`,
    colorType: 'gray',
  },
];
