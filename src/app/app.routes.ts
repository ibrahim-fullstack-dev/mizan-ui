import { Routes } from '@angular/router';
import { APP_ROUTES } from './core/constants/routes.constants';

export const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.dashboard,
    pathMatch: 'full',
  },

  // 2. مسار لوحة التحكم (Dashboard) باستخدام الـ Lazy Loading
  {
    path: APP_ROUTES.dashboard,
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.DashboardComponent),
  },

  {
    path: APP_ROUTES.clients.root,
    children: [
      {
        path: APP_ROUTES.clients.list,
        loadComponent: () =>
          import('./features/clients/clients.component').then((m) => m.ClientsComponent),
      },
    ],
  },
  {
    path: APP_ROUTES.suppliers.root,
    children: [
      {
        path: APP_ROUTES.suppliers.list,
        loadComponent: () =>
          import('./features/suppliers/suppliers.component').then((m) => m.SuppliersComponent),
      },
    ],
  },
  {
    path: APP_ROUTES.bills.root,
    children: [
      {
        path: APP_ROUTES.bills.salesInvoicesList,
        loadComponent: () =>
          import('./features/bills-invoices/sales-invoices-list/sales-invoices-list.component').then(
            (m) => m.SalesInvoicesListComponent,
          ),
      },
      {
        path: APP_ROUTES.bills.recurringSaleInvoices,
        loadComponent: () =>
          import('./features/bills-invoices/recurring-sales-invoices/recurring-sales-invoices.component').then(
            (m) => m.RecurringSalesInvoicesComponent,
          ),
      },
      {
        path: APP_ROUTES.bills.creditNotes,
        loadComponent: () =>
          import('./features/bills-invoices/credit-notes/credit-notes.component').then(
            (m) => m.CreditNotesComponent,
          ),
      },
      {
        path: APP_ROUTES.bills.PurchaseInvoices,
        loadComponent: () =>
          import('./features/bills-invoices/purchase-invoices/purchase-invoices.component').then(
            (m) => m.PurchaseInvoicesComponent,
          ),
      },
      {
        path: APP_ROUTES.bills.recurringPurchaseInvoices,
        loadComponent: () =>
          import('./features/bills-invoices/recurring-purchase-invoices/recurring-purchase-invoices.component').then(
            (m) => m.RecurringPurchaseInvoicesComponent,
          ),
      },
      {
        path: APP_ROUTES.bills.purchaseReturns,
        loadComponent: () =>
          import('./features/bills-invoices/purchase-returns/purchase-returns.component').then(
            (m) => m.PurchaseReturnsComponent,
          ),
      },
    ],
  },
  {
    path: APP_ROUTES.offers,
    loadComponent: () =>
      import('./features/offers/offers.component').then((m) => m.OffersComponent),
  },
  {
    path: APP_ROUTES.orders.root,
    children: [
      {
        path: APP_ROUTES.orders.saleOrders,
        loadComponent: () =>
          import('./features/orders/sale-orders/sale-orders.component').then(
            (m) => m.SaleOrdersComponent,
          ),
      },
      {
        path: APP_ROUTES.orders.purchaseOrders,
        loadComponent: () =>
          import('./features/orders/purchase-orders/purchase-orders.component').then(
            (m) => m.PurchaseOrdersComponent,
          ),
      },
    ],
  },
  {
    path: APP_ROUTES.POS.root,
    children: [
      {
        path: APP_ROUTES.POS.POSList,
        loadComponent: () =>
          import('./features/POS/point-of-sale/point-of-sale.component').then(
            (m) => m.PointOfSaleComponent,
          ),
      },
    ],
  },
  {
    path: APP_ROUTES.warehouse.root,

    children: [
      {
        path: APP_ROUTES.warehouse.productsLists,
        loadComponent: () =>
          import('./features/warehouse/products-lists/products-lists.component').then(
            (m) => m.ProductsListsComponent,
          ),
      },
      {
        path: APP_ROUTES.warehouse.branchesLists,
        loadComponent: () =>
          import('./features/warehouse/branches-lists/branches-lists.component').then(
            (m) => m.BranchesListsComponent,
          ),
      },

      {
        path: APP_ROUTES.warehouse.priceLists,
        loadComponent: () =>
          import('./features/warehouse/price-lists/price-lists.component').then(
            (m) => m.PriceListsComponent,
          ),
      },
      {
        path: APP_ROUTES.warehouse.warehouses,
        loadComponent: () =>
          import('./features/warehouse/warehouses/warehouses.component').then(
            (m) => m.WarehousesComponent,
          ),
      },
      {
        path: APP_ROUTES.warehouse.transferOrders,
        loadComponent: () =>
          import('./features/warehouse/transfer-orders/transfer-orders.component').then(
            (m) => m.TransferOrdersComponent,
          ),
      },

      {
        path: APP_ROUTES.warehouse.categoryLists,
        loadComponent: () =>
          import('./features/warehouse/categories/categories.component').then(
            (m) => m.CategoriesSettingsComponent,
          ),
      },
      {
        path: APP_ROUTES.warehouse.warrantiesLists,
        loadComponent: () =>
          import('./features/warehouse/warranties/warranties.component').then(
            (m) => m.WarrantiesComponent,
          ),
      },
      {
        path: APP_ROUTES.warehouse.unitsLists,
        loadComponent: () =>
          import('./features/warehouse/units/units.component').then(
            (m) => m.TransferOrdersComponent,
          ),
      },
      {
        path: APP_ROUTES.warehouse.brandLists,
        loadComponent: () =>
          import('./features/warehouse/brands/brands.component').then((m) => m.BrandsComponent),
      },
    ],
  },
  {
    path: APP_ROUTES.damagedStock,
    loadComponent: () =>
      import('./features/damages/damages.component').then((m) => m.DamagesComponent),
  },
  {
    path: APP_ROUTES.manufactures.root,
    children: [
      {
        path: APP_ROUTES.manufactures.manufacturingEquations,
        loadComponent: () =>
          import('./features/manufacturing/manufacturing-quations/manufacturing-quations.component').then(
            (m) => m.ManufacturingQuationsComponent,
          ),
      },
      {
        path: APP_ROUTES.manufactures.productions,
        loadComponent: () =>
          import('./features/manufacturing/productions/productions.component').then(
            (m) => m.ProductionsComponent,
          ),
      },
      {
        path: APP_ROUTES.manufactures.productionsSettings,
        loadComponent: () =>
          import('./features/manufacturing/productions-settings/productions-settings.component').then(
            (m) => m.ProductionsSettingsComponent,
          ),
      },
      {
        path: APP_ROUTES.manufactures.productionInvoices,
        loadComponent: () =>
          import('./features/manufacturing/productions-invoices/productions-invoices.component').then(
            (m) => m.ProductionsInvoicesComponent,
          ),
      },
    ],
  },
  {
    path: APP_ROUTES.expenses.root,
    children: [
      {
        path: APP_ROUTES.expenses.expensesList,
        loadComponent: () =>
          import('./features/expenses/expenses-list/expenses-list.component').then(
            (m) => m.ExpensesListComponent,
          ),
      },
      {
        path: APP_ROUTES.expenses.repeatExpensesList,
        loadComponent: () =>
          import('./features/expenses/repeat-expenses-list/repeat-expenses-list.component').then(
            (m) => m.RepeatExpensesListComponent,
          ),
      },
      {
        path: APP_ROUTES.expenses.expensesCategory,
        loadComponent: () =>
          import('./features/expenses/expenses-category/expenses-category.component').then(
            (m) => m.ExpensesCategoryComponent,
          ),
      },
    ],
  },
  {
    path: APP_ROUTES.payments.root,
    children: [
      {
        path: APP_ROUTES.payments.salePayments,
        loadComponent: () =>
          import('./features/payments/sale-payments/sale-payments.component').then(
            (m) => m.SalePaymentsComponent,
          ),
      },
      {
        path: APP_ROUTES.payments.saleSettlements,
        loadComponent: () =>
          import('./features/payments/sale-settlements/sale-settlements.component').then(
            (m) => m.SaleSettlementsComponent,
          ),
      },
      {
        path: APP_ROUTES.payments.salePaymentsReturn,
        loadComponent: () =>
          import('./features/payments/sale-payments-return/sale-payments-return.component').then(
            (m) => m.SalePaymentsReturnComponent,
          ),
      },
      {
        path: APP_ROUTES.payments.purchasePayments,
        loadComponent: () =>
          import('./features/payments/purchase-payments/purchase-payments.component').then(
            (m) => m.PurchasePaymentsComponent,
          ),
      },
      {
        path: APP_ROUTES.payments.purchasePaymentsReturn,
        loadComponent: () =>
          import('./features/payments/purchase-payments-return/purchase-payments-return.component').then(
            (m) => m.PurchasePaymentsReturnComponent,
          ),
      },
      {
        path: APP_ROUTES.payments.supplierPayments,
        loadComponent: () =>
          import('./features/payments/supplier-payments/supplier-payments.component').then(
            (m) => m.SupplierPaymentsComponent,
          ),
      },
      {
        path: APP_ROUTES.payments.clientPayments,
        loadComponent: () =>
          import('./features/payments/client-payments/client-payments.component').then(
            (m) => m.ClientPaymentsComponent,
          ),
      },
    ],
  },
  {
    path: APP_ROUTES.bank,
    loadComponent: () => import('./features/bank/bank.component').then((m) => m.BankComponent),
  },
  {
    path: APP_ROUTES.assetsAndDepreciation.root,
    children: [
      {
        path: APP_ROUTES.assetsAndDepreciation.assetsCategory,
        loadComponent: () =>
          import('./features/assets-depreciation/assets-category/assets-category.component').then(
            (m) => m.AssetsCategoryComponent,
          ),
      },
      {
        path: APP_ROUTES.assetsAndDepreciation.assets,
        loadComponent: () =>
          import('./features/assets-depreciation/assets/assets.component').then(
            (m) => m.AssetsComponent,
          ),
      },
      {
        path: APP_ROUTES.assetsAndDepreciation.depreciation,
        loadComponent: () =>
          import('./features/assets-depreciation/depreciation/depreciation.component').then(
            (m) => m.DepreciationComponent,
          ),
      },
    ],
  },
  // Discounts
  {
    path: APP_ROUTES.discounts,
    loadComponent: () =>
      import('./features/discounts/discounts.component').then((m) => m.DiscountsComponent),
  },
  // Cost Centers
  {
    path: APP_ROUTES.costCenter.root,
    children: [
      {
        path: APP_ROUTES.costCenter.costCenters,
        loadComponent: () =>
          import('./features/cost-center/cost-centers/cost-centers.component').then(
            (m) => m.CostCentersComponent,
          ),
      },
      {
        path: APP_ROUTES.costCenter.costCenterRules,
        loadComponent: () =>
          import('./features/cost-center/cost-center-rules/cost-center-rules.component').then(
            (m) => m.CostCenterRulesComponent,
          ),
      },
      {
        path: APP_ROUTES.costCenter.costCenterAllocations,
        loadComponent: () =>
          import('./features/cost-center/cost-center-allocations/cost-center-allocations.component').then(
            (m) => m.CostCenterAllocationsComponent,
          ),
      },
      {
        path: APP_ROUTES.costCenter.estimatedBudget,
        loadComponent: () =>
          import('./features/cost-center/estimated-budget/estimated-budget.component').then(
            (m) => m.estimatedBudgetComponent,
          ),
      },
      {
        path: APP_ROUTES.costCenter.departments,
        loadComponent: () =>
          import('./features/cost-center/departments/departments.component').then(
            (m) => m.DepartmentsComponent,
          ),
      },
      {
        path: APP_ROUTES.costCenter.projects,
        loadComponent: () =>
          import('./features/cost-center/projects/projects.component').then(
            (m) => m.ProjectsComponent,
          ),
      },
    ],
  },
  {
    path: APP_ROUTES.numberGroup,
    loadComponent: () =>
      import('./features/number-group/number-group.component').then((m) => m.NumberGroupComponent),
  },
  {
    path: APP_ROUTES.clientGroup,
    loadComponent: () =>
      import('./features/client-group/client-group.component').then((m) => m.ClientGroupComponent),
  },
  {
    path: APP_ROUTES.subscriptions.root,
    children: [
      {
        path: APP_ROUTES.subscriptions.pricingPlans,
        loadComponent: () =>
          import('./features/subscriptions/pricing-plans/pricing-plans.component').then(
            (m) => m.PricingPlansComponent,
          ),
      },
    ],
  },
  {
    path: APP_ROUTES.settings.root,
    children: [
      {
        path: APP_ROUTES.settings.baseSettings,
        loadComponent: () =>
          import('./features/settings/base-settings/base-settings.component').then(
            (m) => m.BaseSettingsComponent,
          ),
      },
      {
        path: APP_ROUTES.settings.companySettings,
        loadComponent: () =>
          import('./features/settings/company-settings/company-settings.component').then(
            (m) => m.CompanySettingsComponent,
          ),
      },
      {
        path: APP_ROUTES.settings.users,
        loadComponent: () =>
          import('./features/settings/users/users.component').then((m) => m.UsersComponent),
      },
      {
        path: APP_ROUTES.settings.roles,
        loadComponent: () =>
          import('./features/settings/roles/roles.component').then((m) => m.RolesComponent),
      },
      {
        path: APP_ROUTES.settings.paymentMethod,
        loadComponent: () =>
          import('./features/settings/payment-method/payment-method.component').then(
            (m) => m.PaymentMethodComponent,
          ),
      },
      {
        path: APP_ROUTES.settings.taxes,
        loadComponent: () =>
          import('./features/settings/taxes/taxes.component').then((m) => m.TaxesComponent),
      },
      {
        path: APP_ROUTES.settings.paymentFees,
        loadComponent: () =>
          import('./features/settings/payment-fees/payment-fees.component').then(
            (m) => m.PaymentFeesComponent,
          ),
      },
      {
        path: APP_ROUTES.settings.currency,
        loadComponent: () =>
          import('./features/settings/currency/currency.component').then(
            (m) => m.CurrencyComponent,
          ),
      },
      {
        path: APP_ROUTES.settings.country,
        loadComponent: () =>
          import('./features/settings/country/country.component').then((m) => m.CountryComponent),
      },
      {
        path: APP_ROUTES.settings.activityLog,
        loadComponent: () =>
          import('./features/settings/activity-log/activity-log.component').then(
            (m) => m.ActivityLogComponent,
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: APP_ROUTES.dashboard,
  },
];
