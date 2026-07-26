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

  // 5. مسار الحماية من الروابط العشوائية (Page Not Found / Wildcard Route)
  {
    path: '**',
    redirectTo: APP_ROUTES.dashboard, // أو توجيهه لصفحة 404 مخصصة لاحقاً
  },
];
