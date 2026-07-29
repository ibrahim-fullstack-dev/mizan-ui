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
        path: APP_ROUTES.bills.viewRecurringInvoicesSale,
        loadComponent: () =>
          import('./features/bills-invoices/recurring-sales-invoices/recurring-sales-invoices.component').then(
            (m) => m.RecurringSalesInvoicesComponent,
          ),
      },
      {
        path: APP_ROUTES.bills.viewCreditNotes,
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
        path: APP_ROUTES.bills.viewRecurringPurchaseInvoices,
        loadComponent: () =>
          import('./features/bills-invoices/recurring-purchase-invoices/recurring-purchase-invoices.component').then(
            (m) => m.RecurringPurchaseInvoicesComponent,
          ),
      },
      {
        path: APP_ROUTES.bills.viewPurchaseReturns,
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
    path: APP_ROUTES.pos.root,
    children: [
      {
        path: APP_ROUTES.pos.posList,
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
        path: APP_ROUTES.warehouse.warehouseProductsLists,
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
    path: '**',
    redirectTo: APP_ROUTES.dashboard, // أو توجيهه لصفحة 404 مخصصة لاحقاً
  },
];
