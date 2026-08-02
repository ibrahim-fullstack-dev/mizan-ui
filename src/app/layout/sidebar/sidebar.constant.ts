import { APP_ROUTES } from '../../core/constants/routes.constants';
import { SidebarItem } from './sidebar.types';
import {
  LayoutDashboard,
  Users,
  Settings,
  Landmark,
  CreditCard,
  Truck,
  Tags,
  ShoppingCart,
  MonitorSmartphone,
  Boxes,
  PackageX,
  ChartBar,
  Wallet,
  Banknote,
  ChartPie,
  Percent,
  BookOpen,
  Layers,
  User,
  Grid2x2,
  BadgeDollarSign,
} from 'lucide-angular';

export const SIDEBAR_NAVIGATION: SidebarItem[] = [
  // Dashboard
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: ['/', APP_ROUTES.dashboard],
  },
  // Clients
  {
    label: 'Clients',
    icon: Users,
    children: [
      { label: 'Clients List', path: ['/', APP_ROUTES.clients.root, APP_ROUTES.clients.list] },
      { label: 'Import Clients', path: ['/', APP_ROUTES.clients.root, APP_ROUTES.clients.import] },
    ],
  },
  // Suppliers
  {
    label: 'Suppliers',
    icon: Truck,
    children: [
      {
        label: 'Suppliers List',
        path: ['/', APP_ROUTES.suppliers.root, APP_ROUTES.suppliers.list],
      },
      {
        label: 'Import Suppliers',
        path: ['/', APP_ROUTES.suppliers.root, APP_ROUTES.suppliers.import],
      },
    ],
  },
  // Bills & Invoices (Sales & Purchases)
  {
    label: 'Bills',
    icon: CreditCard,
    children: [
      {
        label: 'Sales Invoices List',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.salesInvoicesList],
      },
      {
        label: 'View Recurring Sales Invoices',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.recurringSaleInvoices],
      },
      {
        label: 'View Credit Notes',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.creditNotes],
      },
      {
        label: 'View Purchase Invoices',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.PurchaseInvoices],
      },
      {
        label: 'View Recurring Purchase Invoices',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.recurringPurchaseInvoices],
      },
      {
        label: 'View Purchase Returns',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.purchaseReturns],
      },
      {
        label: 'Import Sales Invoices',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.importSalesInvoices],
      },
      {
        label: 'Import Credit Sales',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.importCreditSales],
      },
    ],
  },
  // Offers
  {
    label: 'Offers',
    icon: Tags,
    path: ['/', APP_ROUTES.offers],
  },
  // Orders (Sales & Purchases)
  {
    label: 'Orders',
    icon: ShoppingCart,
    children: [
      { label: 'Sale Orders', path: ['/', APP_ROUTES.orders.root, APP_ROUTES.orders.saleOrders] },
      {
        label: 'Purchase Orders',
        path: ['/', APP_ROUTES.orders.root, APP_ROUTES.orders.purchaseOrders],
      },
    ],
  },
  // Point of Sale (POS)
  {
    label: 'Point of Sale (POS)',
    icon: MonitorSmartphone,
    children: [
      { label: 'POS Sessions List', path: ['/', APP_ROUTES.POS.root, APP_ROUTES.POS.POSList] },
      { label: 'Login to POS', path: ['/', APP_ROUTES.POS.root, APP_ROUTES.POS.loginToPOS] },
    ],
  },
  // Warehouses & Transfers (Manufacturing)
  {
    label: 'Warehouse',
    icon: Boxes,
    children: [
      {
        label: 'Products Lists',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.productsLists],
      },
      {
        label: 'Import Products',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.importProducts],
      },
      {
        label: 'Branches Lists',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.branchesLists],
      },
      {
        label: 'Price Lists',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.priceLists],
      },
      {
        label: 'Warehouses',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.warehouses],
      },
      {
        label: 'Transfer Orders',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.transferOrders],
      },
      {
        label: 'Opening Product Balance',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.openingProductBalance],
      },
      // مسارات الإعدادات المتداخلة (Nested settings object resolved to absolute segments)
      {
        label: 'Setting: Categories Lists',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.categoryLists],
      },
      {
        label: 'Setting: Warranties Lists',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.warrantiesLists],
      },
      {
        label: 'Setting: Units Lists',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.unitsLists],
      },
      {
        label: 'Setting: Brands Lists',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.brandLists],
      },
    ],
  },
  // Damaged Stock
  {
    label: 'Damaged Stock',
    icon: PackageX,
    path: ['/', APP_ROUTES.damagedStock],
  },
  // Manufacturing
  {
    label: 'Manufacturing',
    icon: MonitorSmartphone,
    children: [
      {
        label: 'Manufacturing Equations',
        path: ['/', APP_ROUTES.manufactures.root, APP_ROUTES.manufactures.manufacturingEquations],
      },
      {
        label: 'Productions',
        path: ['/', APP_ROUTES.manufactures.root, APP_ROUTES.manufactures.productions],
      },
      {
        label: 'Productions Settings',
        path: ['/', APP_ROUTES.manufactures.root, APP_ROUTES.manufactures.productionsSettings],
      },
      {
        label: 'Production Invoices',
        path: ['/', APP_ROUTES.manufactures.root, APP_ROUTES.manufactures.productionInvoices],
      },
    ],
  },
  // Reports
  {
    label: 'Reports',
    icon: ChartBar,
    children: [
      {
        label: 'Sales',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.sales.root],
      },
      {
        label: 'Clients',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.clients.root],
      },
      {
        label: 'Purchases',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.purchases.root],
      },
      {
        label: 'Payments',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.payments.root],
      },
      {
        label: 'Expenses',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.expenses.root],
      },
      {
        label: 'Taxes',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.taxes.root],
      },
      {
        label: 'Stock',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.stock.root],
      },
      {
        label: 'Accounting',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.accounting.root],
      },
      {
        label: 'Cost Center',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.costCenter.root],
      },
      {
        label: 'Assets',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.assets.root],
      },
      {
        label: 'Manufacturing',
        path: ['/', APP_ROUTES.reports.root, APP_ROUTES.reports.manufacturing.root],
      },
    ],
  },
  // Expenses (Sales & Purchases)
  {
    label: 'Expenses',
    icon: Wallet,
    children: [
      {
        label: 'Expenses List',
        path: ['/', APP_ROUTES.expenses.root, APP_ROUTES.expenses.expensesList],
      },
      {
        label: 'Repeat Expenses List',
        path: ['/', APP_ROUTES.expenses.root, APP_ROUTES.expenses.repeatExpensesList],
      },
      {
        label: 'Expenses Category',
        path: ['/', APP_ROUTES.expenses.root, APP_ROUTES.expenses.expensesCategory],
      },
      {
        label: 'Import Expenses',
        path: ['/', APP_ROUTES.expenses.root, APP_ROUTES.expenses.importExpenses],
      },
    ],
  },
  // Payments & Settlements (Sales & Purchases)
  {
    label: 'Payments',
    icon: Banknote,
    children: [
      {
        label: 'Sales Payments',
        path: ['/', APP_ROUTES.payments.root, APP_ROUTES.payments.salePayments],
      },
      {
        label: 'Sale Settlements',
        path: ['/', APP_ROUTES.payments.root, APP_ROUTES.payments.saleSettlements],
      },
      {
        label: 'Sales Payments Return',
        path: ['/', APP_ROUTES.payments.root, APP_ROUTES.payments.salePaymentsReturn],
      },
      {
        label: 'Purchase Payments',
        path: ['/', APP_ROUTES.payments.root, APP_ROUTES.payments.purchasePayments],
      },
      {
        label: 'Purchase Payments Return',
        path: ['/', APP_ROUTES.payments.root, APP_ROUTES.payments.purchasePaymentsReturn],
      },
      {
        label: 'Supplier Payments',
        path: ['/', APP_ROUTES.payments.root, APP_ROUTES.payments.supplierPayments],
      },
      {
        label: 'Client Payments',
        path: ['/', APP_ROUTES.payments.root, APP_ROUTES.payments.clientPayments],
      },
    ],
  },
  // Bank
  {
    label: 'Bank',
    icon: Landmark,
    path: ['/', APP_ROUTES.bank],
  },
  // Assets & Depreciation
  {
    label: 'Assets & Depreciation',
    icon: ChartPie,
    children: [
      {
        label: 'Assets Category',
        path: [
          '/',
          APP_ROUTES.assetsAndDepreciation.root,
          APP_ROUTES.assetsAndDepreciation.assetsCategory,
        ],
      },
      {
        label: 'Assets',
        path: ['/', APP_ROUTES.assetsAndDepreciation.root, APP_ROUTES.assetsAndDepreciation.assets],
      },
      {
        label: 'Depreciation',
        path: [
          '/',
          APP_ROUTES.assetsAndDepreciation.root,
          APP_ROUTES.assetsAndDepreciation.depreciation,
        ],
      },
    ],
  },
  // Discounts
  {
    label: 'Discounts',
    icon: Percent,
    path: ['/', APP_ROUTES.discounts],
  },
  // Accounting
  {
    label: 'Accounting',
    icon: BookOpen,
    children: [
      {
        label: 'Manual Ledgers',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.manualLedgers],
      },
      {
        label: 'Add Journal Entries',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.addLedgerEntries],
      },
      {
        label: 'Entries',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.entries],
      },
      {
        label: 'accounts Manual',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.accountsManual],
      },
      {
        label: 'General Ledger',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.generalLedger],
      },
      {
        label: 'Close Period',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.closePeriod],
      },
    ],
  },
  // Cost Centers
  {
    label: 'Cost Centers',
    icon: Layers,
    children: [
      {
        label: 'Cost Centers',
        path: ['/', APP_ROUTES.costCenter.root, APP_ROUTES.costCenter.costCenters],
      },
      {
        label: 'Cost Center Rules',
        path: ['/', APP_ROUTES.costCenter.root, APP_ROUTES.costCenter.costCenterRules],
      },
      {
        label: 'Cost Center Allocations',
        path: ['/', APP_ROUTES.costCenter.root, APP_ROUTES.costCenter.costCenterAllocations],
      },
      {
        label: 'Estimated Budgets',
        path: ['/', APP_ROUTES.costCenter.root, APP_ROUTES.costCenter.estimatedBudget],
      },
      {
        label: 'Departments',
        path: ['/', APP_ROUTES.costCenter.root, APP_ROUTES.costCenter.departments],
      },
      {
        label: 'Projects',
        path: ['/', APP_ROUTES.costCenter.root, APP_ROUTES.costCenter.projects],
      },
    ],
  },
  // Number Group
  {
    label: 'Number Group',
    icon: Grid2x2,
    path: ['/', APP_ROUTES.numberGroup],
  },
  // Client Group
  {
    label: 'Client Group',
    icon: User,
    path: ['/', APP_ROUTES.clientGroup],
  },
  // Subscriptions
  {
    label: 'Subscriptions',
    icon: BadgeDollarSign,
    children: [
      {
        label: 'Pricing Plans',
        path: ['/', APP_ROUTES.subscriptions.root, APP_ROUTES.subscriptions.pricingPlans],
      },
      {
        label: 'Invoices',
        path: ['/', APP_ROUTES.subscriptions.root, APP_ROUTES.subscriptions.invoices],
      },
    ],
  },
  // Settings
  {
    label: 'Settings',
    icon: Settings,
    children: [
      {
        label: 'Base Settings',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.baseSettings],
      },
      {
        label: 'Company Settings',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.companySetting],
      },
      {
        label: 'Users',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.users],
      },
      {
        label: 'Roles',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.roles],
      },
      {
        label: 'Payment Methods',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.paymentMethod],
      },
      {
        label: 'Taxes',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.taxes],
      },
      {
        label: 'Payment Fees',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.paymentFees],
      },
      {
        label: 'Currency',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.currency],
      },
      {
        label: 'Country',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.country],
      },
      {
        label: 'Activity Logs',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.activityLog],
      },
      {
        label: 'Template Designer',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.templateDesign],
      },
      {
        label: 'Tickets',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.tickets],
      },
    ],
  },
];
