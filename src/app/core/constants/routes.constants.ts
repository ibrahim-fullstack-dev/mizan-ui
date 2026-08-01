export const APP_ROUTES = {
  // Dashboard
  dashboard: 'dashboard',

  // Clients
  clients: {
    root: 'clients',
    list: 'list',
    import: 'import',
  },

  // Suppliers
  suppliers: {
    root: 'suppliers',
    list: 'list',
    import: 'import',
  },

  // Bills & Invoices (Sales & Purchases)
  bills: {
    root: 'bills',
    salesInvoicesList: 'sale',
    recurringSaleInvoices: 'sale-repeat',
    creditNotes: 'returned-sales',
    PurchaseInvoices: 'purchase',
    recurringPurchaseInvoices: 'purchase-repeat',
    purchaseReturns: 'returned-purchase',
    importSalesInvoices: 'import-sale-invoice',
    importCreditSales: 'import-credit-sale',
  },
  // Offers
  offers: 'sale-offer',

  // Orders (Sales & Purchases)
  orders: {
    root: 'orders',
    saleOrders: 'sale-order',
    purchaseOrders: 'purchase-order',
  },

  // POS Routes
  POS: {
    root: 'pos',
    POSList: 'list',
    loginToPOS: 'start-session',
  },

  // Warehouses & Transfers (Manufacturing)
  warehouse: {
    root: 'warehouse',
    productsLists: 'list',
    importProducts: 'import',
    branchesLists: 'branches',
    priceLists: 'price-lists',
    warehouses: 'warehouses',
    transferOrders: 'transfer-orders',
    openingProductBalance: 'opening-balance',
    categoryLists: 'categories',
    warrantiesLists: 'warranties',
    unitsLists: 'units',
    brandLists: 'brands',
  },

  damagedStock: 'damaged-stock',

  // التصنيع والإنتاج (العمليات التشغيلية)
  manufactures: {
    root: 'manufactures',
    manufacturingEquations: 'manufacturing-equations',
    productions: 'productions',
    productionsSettings: 'productions-settings',
    productionInvoices: 'production-invoices',
  },

  // Expenses (Sales & Purchases)
  expenses: {
    root: 'expenses',
    expensesList: 'list',
    repeatExpensesList: 'repeat-list',
    expensesCategory: 'categories',
    importExpenses: 'import',
  },

  // payments & Settlements (Sales & Purchases)
  payments: {
    root: 'payments',
    salePayments: 'sale-payments', // PaymentsSale Payments
    saleSettlements: 'sale-settlements', // Sale Settlements
    salePaymentsReturn: 'sale-payments-return', // Sale Payments Return
    purchasePayments: 'purchase-payments', // Purchase Payments
    purchasePaymentsReturn: 'purchase-return', // Purchase Payments Return
    supplierPayments: 'supplier-payments', // Supplier Payments
    clientPayments: 'client-payments', // Client Payments
  },
  // Bank
  bank: 'bank',

  // Asset & Depreciation
  assetsAndDepreciation: {
    root: 'assets-depreciation',
    assetsCategory: 'categories', // Assets & DepreciationAssets Category
    assets: 'assets', // Assets
    depreciation: 'depreciation', // Depreciation
  },
  // Accounting & General Ledger
  accounting: {
    root: 'accounting',
    manualLedgers: 'manual-ledgers', // AccountingManual Ledgers
    addLedgerEntries: 'add-entry', // Add Ledger Entries
    entries: 'entries', // Entries
    accountsManual: 'chart-of-accounts', // Accounts Manual (دليل الحسابات)
    generalLedger: 'general-ledger', // General Ledger
    closePeriod: 'close-period', // Close Period
  },

  // Reports & Analytics
  reports: {
    root: 'reports',

    // Sales & Purchases Reports
    sales: {
      root: 'sales',
      saleBasedOnClient: 'sale-by-client',
      saleBasedOnProduct: 'sale-by-product',
      saleBasedOnUser: 'sale-by-user',
      saleBasedOnSalesman: 'sale-by-salesman',
      saleBasedOnSupplier: 'sale-by-supplier',
      productHistoryReport: 'product-history',
      posCashierReport: 'pos-cashier',
      posCashierSummary: 'pos-cashier-summary',
      posDeficitExcessReport: 'pos-deficit-excess',
    },

    // Clients Reports
    clients: {
      root: 'clients',
      clientRemainingBalance: 'client-remaining-balance',
      bankFeesReport: 'bank-fees',
      summaryProfitInvoicesDetailed: 'profit-invoices-detailed',
      summaryProfitInvoices: 'profit-invoices-summary',
      statementReportForClient: 'client-statement',
      creditSaleReport: 'credit-sale',
      summaryCreditSaleReport: 'credit-sale-summary',
      invoiceAging: 'invoice-aging',
      badDebts: 'bad-debts',
    },

    // Purchases Reports
    purchases: {
      root: 'purchases',
      purchasesBySupplier: 'purchases-by-supplier',
      purchasesBasedOnProduct: 'purchases-by-product',
      supplierRemainingBalance: 'supplier-remaining-balance',
      purchasesStatementBill: 'purchases-statement-bill',
      purchasesOrderBill: 'purchases-order-bill',
      statementReportForSupplier: 'supplier-statement',
      creditPurchaseReport: 'credit-purchase',
      purchasesOrderBillSummary: 'purchases-order-bill-summary',
      purchasesStatementBillSummary: 'purchases-statement-summary',
      invoiceAging: 'invoice-aging',
      summaryCreditPurchaseReport: 'credit-purchase-summary',
    },

    // Payments & Settlements Reports
    payments: {
      root: 'payments',
      saleClientPayment: 'sale-client-payment',
      salePayment: 'sale-payment',
      creditSalePaymentNotices: 'credit-sale-notices',
      salesReconciliationReport: 'sales-reconciliation',
      purchaseSupplierPayment: 'purchase-supplier-payment',
      purchasePayment: 'purchase-payment',
      dutyToPayReport: 'duty-to-pay',
      paymentHeld: 'payment-held',
      timeToPayReport: 'time-to-pay',
    },

    // Expenses & Costs Reports
    expenses: {
      root: 'expenses',
      expenseBasedOnCategories: 'expense-by-categories',
      expenseBasedOnSupplier: 'expense-by-supplier',
      expenseBasedOnClient: 'expense-by-client',
      expenseListReport: 'expense-list',
      expenseListSummaryReport: 'expense-list-summary',
    },

    // Taxes & Charges Reports
    taxes: {
      root: 'taxes',
      saleTaxReport: 'sale-tax',
      outTax: 'out-tax',
      outTaxBasedOnClient: 'out-tax-by-client',
      purchaseTaxReport: 'purchase-tax',
      inTax: 'in-tax',
      inTaxBasedOnSupplier: 'in-tax-by-supplier',
      returnTaxReport: 'return-tax',
    },

    // Stock & Inventory Reports
    stock: {
      root: 'stock',
      damagedStockReport: 'damaged-stock',
      summaryDamageProductReport: 'damaged-products-summary',
      expireStockProduct: 'expired-products',
      productPriceListReport: 'product-prices',
      popularProduct: 'popular-products',
      lowStockProducts: 'low-stock',
      stockBasedOnCategory: 'stock-by-category',
      suppliersReportByBranchStock: 'suppliers-by-branch',
      stockInputInRangeReport: 'input-in-range',
      stockTransfer: 'transfers',
      stockTransferProduct: 'transfers-by-product',
      stockWarehouseSummary: 'warehouse-summary',
    },

    // Accounting & Final Accounts Reports
    accounting: {
      root: 'accounting',
      generalLedger: 'general-ledger',
      generalLedgerDetails: 'general-ledger-details',
      trialBalanceReport: 'trial-balance',
      statementOfFinancialPositionReport: 'financial-position',
      incomeStatementReport: 'income-statement',
      cashFlowStatement: 'cash-flow',
      dailyEntryReport: 'daily-entry',
    },

    // Cost Centers Reports
    costCenter: {
      root: 'cost-center',
      transactions: 'transactions',
      trialBalance: 'trial-balance',
      profitAndLoss: 'profit-loss',
      budgetSuggestion: 'budget-suggestion',
      budgetReport: 'budget-report',
      budgetVariance: 'budget-variance',
    },

    // Assets & Depreciation Reports
    assets: {
      root: 'assets',
      assetListReport: 'list',
      assetBasedOnCategories: 'assets-by-category',
      assetBasedOnBranches: 'assets-by-branch',
      assetAndEquipmentDepreciationReport: 'depreciation',
    },

    // Manufacturing Reports
    manufacturing: {
      root: 'manufacturing',
      consumedRawMaterials: 'consumed-raw-materials',
      producedProductsReport: 'produced-products-report',
    },
  },
  // Discounts
  discounts: 'discounts',

  // Client Groups
  clientGroup: 'client-group',

  // Cost Centers
  costCenter: {
    root: 'cost-center',
    costCenters: 'list', // Cost CenterCost Centers
    costCenterRules: 'rules', // Cost Center Rules
    costCenterAllocations: 'allocations', // Cost Center Allocations
    estimatedBudget: 'estimated-budget', // Estimated Budget
    departments: 'departments', // Departments
    projects: 'projects', // Projects
  },
  // Number Groups
  numberGroup: 'number-group', // Number Groups

  // Subscriptions
  subscriptions: {
    root: 'subscriptions',
    pricingPlans: 'list',
    invoices: 'invoices',
  },

  // Settings
  settings: {
    root: 'settings',
    baseSettings: 'base', // SettingsBase Settings
    companySetting: 'company', // Company Setting
    users: 'users', // Users
    roles: 'roles', // Roles
    paymentMethod: 'payment-methods', // Payment method
    taxes: 'taxes', // Taxes
    paymentFees: 'fees', // Payment Fees
    currency: 'currencies', // Currency
    country: 'countries', // Country
    activityLog: 'activity-log', // Activity Log
    templateDesign: 'template-design', // Template Design
    tickets: 'tickets', // Tickets
  },
} as const;
