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

  // 5. مسار الحماية من الروابط العشوائية (Page Not Found / Wildcard Route)
  {
    path: '**',
    redirectTo: APP_ROUTES.dashboard, // أو توجيهه لصفحة 404 مخصصة لاحقاً
  },
];
