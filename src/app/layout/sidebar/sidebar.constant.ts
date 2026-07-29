import { APP_ROUTES } from '../../core/constants/routes.constants'; // يرجى التأكد من المسار الفعلي في مشروعك
import { SidebarItem } from './sidebar.types';

export const SIDEBAR_NAVIGATION: SidebarItem[] = [
  // 1. الرئيسيّة (Dashboard)
  {
    label: 'Dashboard',
    icon: 'layout-dashboard',
    path: ['/', APP_ROUTES.dashboard],
  },

  // 2. البنك (Bank)
  {
    label: 'Bank Accounts',
    icon: 'landmark',
    path: ['/', APP_ROUTES.bank],
  },

  // 3. العملاء (Clients)
  {
    label: 'Clients',
    icon: 'users',
    children: [
      { label: 'Clients List', path: ['/', APP_ROUTES.clients.root, APP_ROUTES.clients.list] },
      { label: 'Import Clients', path: ['/', APP_ROUTES.clients.root, APP_ROUTES.clients.import] },
    ],
  },

  // 4. الموردين (Suppliers)
  {
    label: 'Suppliers',
    icon: 'truck',
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

  // 5. الفواتير والمستندات (Bills & Invoices)
  {
    label: 'Bills & Invoices',
    icon: 'file-text',
    children: [
      {
        label: 'Sales Invoices',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.salesInvoicesList],
      },
      {
        label: 'Recurring Sales Invoices',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.viewRecurringInvoicesSale],
      },
      {
        label: 'Credit Notes (Returns)',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.viewCreditNotes],
      },
      {
        label: 'Purchase Invoices',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.PurchaseInvoices],
      },
      {
        label: 'Recurring Purchase Invoices',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.viewRecurringPurchaseInvoices],
      },
      {
        label: 'Purchase Returns',
        path: ['/', APP_ROUTES.bills.root, APP_ROUTES.bills.viewPurchaseReturns],
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

  // 6. العروض (Offers)
  {
    label: 'Sale Offers',
    icon: 'tags',
    path: ['/', APP_ROUTES.offers],
  },

  // 7. الطلبيات (Orders)
  {
    label: 'Orders Management',
    icon: 'shopping-cart',
    children: [
      { label: 'Sale Orders', path: ['/', APP_ROUTES.orders.root, APP_ROUTES.orders.saleOrders] },
      {
        label: 'Purchase Orders',
        path: ['/', APP_ROUTES.orders.root, APP_ROUTES.orders.purchaseOrders],
      },
    ],
  },

  // 8. نقاط البيع (POS)
  {
    label: 'Point of Sale (POS)',
    icon: 'monitor-smartphone',
    children: [
      { label: 'POS Sessions List', path: ['/', APP_ROUTES.pos.root, APP_ROUTES.pos.posList] },
      { label: 'Login to POS', path: ['/', APP_ROUTES.pos.root, APP_ROUTES.pos.loginToPOS] },
    ],
  },

  // 9. المخازن والمستودعات (Warehouse) - مع معالجة كائن الإعدادات المتداخل
  {
    label: 'Inventory & Warehouses',
    icon: 'boxes',
    children: [
      {
        label: 'Products List',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.warehouseProductsLists],
      },
      {
        label: 'Import Products',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.importsProducts],
      },
      {
        label: 'Branches List',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.branchesLists],
      },
      {
        label: 'Price Lists',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.priceLists],
      },
      {
        label: 'Warehouses Management',
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
        label: 'Setting: Categories',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.categoryLists],
      },
      {
        label: 'Setting: Warranties',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.warrantiesLists],
      },
      {
        label: 'Setting: Units of Measure',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.unitsLists],
      },
      {
        label: 'Setting: Brands',
        path: ['/', APP_ROUTES.warehouse.root, APP_ROUTES.warehouse.brandLists],
      },
    ],
  },

  // 10. المخزون التالف (Damaged Stock)
  {
    label: 'Damaged Stock',
    icon: 'package-x',
    path: ['/', APP_ROUTES.damagedStock],
  },

  // 11. التصنيع والإنتاج (Manufacturing)
  {
    label: 'Manufacturing',
    icon: 'factory',
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

  // 12. المصروفات (Expenses)
  {
    label: 'Expenses',
    icon: 'wallet',
    children: [
      {
        label: 'Expenses List',
        path: ['/', APP_ROUTES.expenses.root, APP_ROUTES.expenses.expensesList],
      },
      {
        label: 'Recurring Expenses',
        path: ['/', APP_ROUTES.expenses.root, APP_ROUTES.expenses.repeatExpensesList],
      },
      {
        label: 'Expenses Categories',
        path: ['/', APP_ROUTES.expenses.root, APP_ROUTES.expenses.expensesCategory],
      },
      {
        label: 'Import Expenses',
        path: ['/', APP_ROUTES.expenses.root, APP_ROUTES.expenses.importExpenses],
      },
    ],
  },

  // 13. المدفوعات والتسويات (Payments & Settlements)
  {
    label: 'Payments & Settlements',
    icon: 'banknote',
    children: [
      {
        label: 'Sales Payments',
        path: ['/', APP_ROUTES.payments.root, APP_ROUTES.payments.salePayments],
      },
      {
        label: 'Sales Settlements',
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

  // 14. الأصول والإهلاكات (Asset & Depreciation)
  {
    label: 'Assets & Depreciation',
    icon: 'chart-pie',
    children: [
      {
        label: 'Assets Categories',
        path: [
          '/',
          APP_ROUTES.assetsAndDepreciation.root,
          APP_ROUTES.assetsAndDepreciation.assetsCategory,
        ],
      },
      {
        label: 'Assets Registry',
        path: ['/', APP_ROUTES.assetsAndDepreciation.root, APP_ROUTES.assetsAndDepreciation.assets],
      },
      {
        label: 'Depreciation Log',
        path: [
          '/',
          APP_ROUTES.assetsAndDepreciation.root,
          APP_ROUTES.assetsAndDepreciation.depreciation,
        ],
      },
    ],
  },

  // 15. الحسابات العامة والدفاتر (Accounting & General Ledger)
  {
    label: 'Accounting & Ledger',
    icon: 'book-open',
    children: [
      {
        label: 'Manual Ledgers',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.manualLedgers],
      },
      {
        label: 'Add Journal Entry',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.addLedgerEntries],
      },
      {
        label: 'All Journal Entries',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.entries],
      },
      {
        label: 'Chart of Accounts',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.accountsManual],
      },
      {
        label: 'General Ledger',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.generalLedger],
      },
      {
        label: 'Close Financial Period',
        path: ['/', APP_ROUTES.accounting.root, APP_ROUTES.accounting.closePeriod],
      },
    ],
  },

  // 16. الخصومات ومجموعات العملاء ومراكز التكلفة والاشتراكات (Discounts, Groups, Cost Centers & Subscriptions)
  {
    label: 'Discounts Management',
    icon: 'percent',
    path: ['/', APP_ROUTES.discounts],
  },
  {
    label: 'Client Groups',
    icon: 'user-check',
    path: ['/', APP_ROUTES.clientGroup],
  },
  {
    label: 'Cost Centers',
    icon: 'layers',
    children: [
      {
        label: 'Cost Centers List',
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
        label: 'Departments Setup',
        path: ['/', APP_ROUTES.costCenter.root, APP_ROUTES.costCenter.departments],
      },
      {
        label: 'Projects Registry',
        path: ['/', APP_ROUTES.costCenter.root, APP_ROUTES.costCenter.projects],
      },
    ],
  },
  {
    label: 'System Subscriptions',
    icon: 'repeat',
    children: [
      {
        label: 'Subscriptions List',
        path: ['/', APP_ROUTES.subscriptions.root, APP_ROUTES.subscriptions.list],
      },
      {
        label: 'Subscription Invoices',
        path: ['/', APP_ROUTES.subscriptions.root, APP_ROUTES.subscriptions.invoices],
      },
    ],
  },

  // ==========================================
  // تجميعة التقارير (Reports Modules - Flattened Categorically)
  // ==========================================

  // 17. تقارير المبيعات والمشتريات والعملاء والموردين
  {
    label: 'Reports: Sales & CRM',
    icon: 'chart-bar',
    children: [
      // Sales Reports
      {
        label: 'Sales by Client',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.saleBasedOnClient,
        ],
      },
      {
        label: 'Sales by Product',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.saleBasedOnProduct,
        ],
      },
      {
        label: 'Sales by User',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.saleBasedOnUser,
        ],
      },
      {
        label: 'Sales by Salesman',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.saleBasedOnSalesman,
        ],
      },
      {
        label: 'Sales by Supplier',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.saleBasedOnSupplier,
        ],
      },
      {
        label: 'Product History',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.productHistoryReport,
        ],
      },
      {
        label: 'POS Cashier Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.posCashierReport,
        ],
      },
      {
        label: 'POS Cashier Summary',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.posCashierSummary,
        ],
      },
      {
        label: 'POS Deficit/Excess',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.sales.root,
          APP_ROUTES.reports.sales.posDeficitExcessReport,
        ],
      },
      // Clients Reports
      {
        label: 'Client Remaining Balances',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.clientRemainingBalance,
        ],
      },
      {
        label: 'Bank Fees Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.bankFeesReport,
        ],
      },
      {
        label: 'Detailed Invoice Profits',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.summaryProfitInvoicesDetailed,
        ],
      },
      {
        label: 'Summary Invoice Profits',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.summaryProfitInvoices,
        ],
      },
      {
        label: 'Client Statement Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.statementReportForClient,
        ],
      },
      {
        label: 'Credit Sales Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.creditSaleReport,
        ],
      },
      {
        label: 'Credit Sales Summary',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.summaryCreditSaleReport,
        ],
      },
      {
        label: 'Invoice Aging (Clients)',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.invoiceAging,
        ],
      },
      {
        label: 'Bad Debts Log',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.clients.root,
          APP_ROUTES.reports.clients.badDebts,
        ],
      },
    ],
  },

  // 18. تقارير المشتريات، المدفوعات، والمصروفات
  {
    label: 'Reports: Procurement & Costs',
    icon: 'chart-no-axes-column',
    children: [
      // Purchases Reports
      {
        label: 'Purchases by Supplier',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.purchasesBySupplier,
        ],
      },
      {
        label: 'Purchases by Product',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.purchasesBasedOnProduct,
        ],
      },
      {
        label: 'Supplier Remaining Balances',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.supplierRemainingBalance,
        ],
      },
      {
        label: 'Purchases Statement Bill',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.purchasesStatementBill,
        ],
      },
      {
        label: 'Purchases Order Bill',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.purchasesOrderBill,
        ],
      },
      {
        label: 'Supplier Statement Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.statementReportForSupplier,
        ],
      },
      {
        label: 'Credit Purchase Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.creditPurchaseReport,
        ],
      },
      {
        label: 'Purchase Order Summary',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.purchasesOrderBillSummary,
        ],
      },
      {
        label: 'Purchase Statement Summary',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.purchasesStatementBillSummary,
        ],
      },
      {
        label: 'Invoice Aging (Suppliers)',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.invoiceAging,
        ],
      },
      {
        label: 'Credit Purchase Summary',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.purchases.root,
          APP_ROUTES.reports.purchases.summaryCreditPurchaseReport,
        ],
      },
      // Payments Reports
      {
        label: 'Sales Client Payments',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.saleClientPayment,
        ],
      },
      {
        label: 'Sales Payments Log',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.salePayment,
        ],
      },
      {
        label: 'Credit Sale Payment Notices',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.creditSalePaymentNotices,
        ],
      },
      {
        label: 'Sales Reconciliation',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.salesReconciliationReport,
        ],
      },
      {
        label: 'Purchase Supplier Payments',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.purchaseSupplierPayment,
        ],
      },
      {
        label: 'Purchase Payments Log',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.purchasePayment,
        ],
      },
      {
        label: 'Duty to Pay Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.dutyToPayReport,
        ],
      },
      {
        label: 'Payments Held Log',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.paymentHeld,
        ],
      },
      {
        label: 'Time to Pay Analysis',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.payments.root,
          APP_ROUTES.reports.payments.timeToPayReport,
        ],
      },
      // Expenses Reports
      {
        label: 'Expenses by Categories',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.expenses.root,
          APP_ROUTES.reports.expenses.expenseBasedOnCategories,
        ],
      },
      {
        label: 'Expenses by Supplier',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.expenses.root,
          APP_ROUTES.reports.expenses.expenseBasedOnSupplier,
        ],
      },
      {
        label: 'Expenses by Client',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.expenses.root,
          APP_ROUTES.reports.expenses.expenseBasedOnClient,
        ],
      },
      {
        label: 'Expense List Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.expenses.root,
          APP_ROUTES.reports.expenses.expenseListReport,
        ],
      },
      {
        label: 'Expense List Summary',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.expenses.root,
          APP_ROUTES.reports.expenses.expenseListSummaryReport,
        ],
      },
    ],
  },

  // 19. تقارير الضرائب، المخازن، الحسابات الختامية والتصنيع
  {
    label: 'Reports: Finance & Stock',
    icon: 'chart-column-big',
    children: [
      // Taxes Reports
      {
        label: 'Sales Tax Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.taxes.root,
          APP_ROUTES.reports.taxes.saleTaxReport,
        ],
      },
      {
        label: 'Output Tax Log',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.taxes.root,
          APP_ROUTES.reports.taxes.outTax,
        ],
      },
      {
        label: 'Output Tax by Client',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.taxes.root,
          APP_ROUTES.reports.taxes.outTaxBasedOnClient,
        ],
      },
      {
        label: 'Purchase Tax Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.taxes.root,
          APP_ROUTES.reports.taxes.purchaseTaxReport,
        ],
      },
      {
        label: 'Input Tax Log',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.taxes.root,
          APP_ROUTES.reports.taxes.inTax,
        ],
      },
      {
        label: 'Input Tax by Supplier',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.taxes.root,
          APP_ROUTES.reports.taxes.inTaxBasedOnSupplier,
        ],
      },
      {
        label: 'Return Tax Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.taxes.root,
          APP_ROUTES.reports.taxes.returnTaxReport,
        ],
      },
      // Stock Reports
      {
        label: 'Damaged Stock Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.damagedStockReport,
        ],
      },
      {
        label: 'Damaged Products Summary',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.summaryDamageProductReport,
        ],
      },
      {
        label: 'Expired Stock Products',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.expireStockProduct,
        ],
      },
      {
        label: 'Product Price Lists',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.productPriceListReport,
        ],
      },
      {
        label: 'Popular Products Analysis',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.popularProduct,
        ],
      },
      {
        label: 'Low Stock Alerts',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.lowStockProducts,
        ],
      },
      {
        label: 'Stock by Category',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.stockBasedOnCategory,
        ],
      },
      {
        label: 'Suppliers by Branch Stock',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.suppliersReportByBranchStock,
        ],
      },
      {
        label: 'Stock Input In Range',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.stockInputInRangeReport,
        ],
      },
      {
        label: 'Stock Transfers Log',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.stockTransfer,
        ],
      },
      {
        label: 'Stock Transfers by Product',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.stockTransferProduct,
        ],
      },
      {
        label: 'Warehouse Stock Summary',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.stock.root,
          APP_ROUTES.reports.stock.stockWarehouseSummary,
        ],
      },
      // Accounting Reports
      {
        label: 'Ledger: General Ledger',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.accounting.root,
          APP_ROUTES.reports.accounting.generalLedger,
        ],
      },
      {
        label: 'Ledger: Detailed Ledger',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.accounting.root,
          APP_ROUTES.reports.accounting.generalLedgerDetails,
        ],
      },
      {
        label: 'Statement: Trial Balance',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.accounting.root,
          APP_ROUTES.reports.accounting.trialBalanceReport,
        ],
      },
      {
        label: 'Statement: Financial Position',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.accounting.root,
          APP_ROUTES.reports.accounting.statementOfFinancialPositionReport,
        ],
      },
      {
        label: 'Statement: Income Statement',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.accounting.root,
          APP_ROUTES.reports.accounting.incomeStatementReport,
        ],
      },
      {
        label: 'Statement: Cash Flow',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.accounting.root,
          APP_ROUTES.reports.accounting.cashFlowStatement,
        ],
      },
      {
        label: 'Statement: Daily Entries',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.accounting.root,
          APP_ROUTES.reports.accounting.dailyEntryReport,
        ],
      },
      // Cost Center Reports
      {
        label: 'Cost Center Transactions',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.costCenter.root,
          APP_ROUTES.reports.costCenter.transactions,
        ],
      },
      {
        label: 'Cost Center Trial Balance',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.costCenter.root,
          APP_ROUTES.reports.costCenter.trialBalance,
        ],
      },
      {
        label: 'Cost Center Profit & Loss',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.costCenter.root,
          APP_ROUTES.reports.costCenter.profitAndLoss,
        ],
      },
      {
        label: 'Budget Suggestions',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.costCenter.root,
          APP_ROUTES.reports.costCenter.budgetSuggestion,
        ],
      },
      {
        label: 'Budget Report',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.costCenter.root,
          APP_ROUTES.reports.costCenter.budgetReport,
        ],
      },
      {
        label: 'Budget Variance Analysis',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.costCenter.root,
          APP_ROUTES.reports.costCenter.budgetVariance,
        ],
      },
      // Assets Reports
      {
        label: 'Assets Master List',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.assets.root,
          APP_ROUTES.reports.assets.assetListReport,
        ],
      },
      {
        label: 'Assets by Category',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.assets.root,
          APP_ROUTES.reports.assets.assetBasedOnCategories,
        ],
      },
      {
        label: 'Assets by Branch',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.assets.root,
          APP_ROUTES.reports.assets.assetBasedOnBranches,
        ],
      },
      {
        label: 'Equipment Depreciation',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.assets.root,
          APP_ROUTES.reports.assets.assetAndEquipmentDepreciationReport,
        ],
      },
      // Manufacturing Reports
      {
        label: 'Consumed Raw Materials',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.manufacturing.root,
          APP_ROUTES.reports.manufacturing.consumedRawMaterials,
        ],
      },
      {
        label: 'Produced Products Output',
        path: [
          '/',
          APP_ROUTES.reports.root,
          APP_ROUTES.reports.manufacturing.root,
          APP_ROUTES.reports.manufacturing.producedProductsReport,
        ],
      },
    ],
  },

  // 20. إعدادات النظام (System Settings)
  {
    label: 'Settings',
    icon: 'settings',
    children: [
      {
        label: 'Base Configuration',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.baseSettings],
      },
      {
        label: 'Company Profile',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.companySetting],
      },
      {
        label: 'Users Management',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.users],
      },
      {
        label: 'Roles & Permissions',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.roles],
      },
      {
        label: 'Payment Methods',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.paymentMethod],
      },
      {
        label: 'Number Groups',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.numberGroup],
      },
      {
        label: 'Tax Configurations',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.taxes],
      },
      {
        label: 'Payment Fees Settings',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.paymentFees],
      },
      {
        label: 'Currencies Setup',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.currency],
      },
      {
        label: 'Countries Setup',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.country],
      },
      {
        label: 'System Activity Logs',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.activityLog],
      },
      {
        label: 'Invoice Template Designer',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.templateDesign],
      },
      {
        label: 'Support Tickets',
        path: ['/', APP_ROUTES.settings.root, APP_ROUTES.settings.tickets],
      },
    ],
  },
];
