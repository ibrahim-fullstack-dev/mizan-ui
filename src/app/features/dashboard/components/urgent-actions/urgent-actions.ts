import { Component } from '@angular/core';
import {
  LucideAngularModule,
  UserPlus,
  FilePlus,
  FileText,
  Truck,
  Receipt,
  Box,
  ArrowDownLeft,
  Wallet,
  ArrowUpRight,
} from 'lucide-angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { APP_ROUTES } from '../../../../core/constants/routes.constants';

@Component({
  selector: 'app-urgent-actions',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './urgent-actions.html',
  styleUrl: './urgent-actions.css',
})
export class UrgentActions {
  // Accessing the APP_ROUTES constant to use in the component
  protected readonly routes = APP_ROUTES;

  readonly MyIcons = {
    UserPlus,
    FilePlus,
    FileText,
    Truck,
    Receipt,
    Box,
    ArrowDownLeft,
    Wallet,
    ArrowUpRight,
  };

  UrgentActionsChartData = [
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
}
