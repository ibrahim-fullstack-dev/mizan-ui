import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Wallet, Users, ReceiptText } from 'lucide-angular';
import { APP_ROUTES } from '../../../core/constants/routes.constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-analytics-breakdown',
  imports: [LucideAngularModule, RouterLink, NgClass],
  templateUrl: './analytics-breakdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './analytics-breakdown.component.css',
})
export class AnalyticsBreakdown {
  readonly MyIcons = {
    Wallet,
    Users,
    ReceiptText,
  };
  protected readonly analyticsData = signal([
    {
      id: 'purchase',
      title: 'Purchase',
      unpaid: 'Unpaid Purchase ',
      value: '$14,250.00',
      icon: Wallet,
      link: `/${APP_ROUTES.orders.root}/${APP_ROUTES.orders.purchaseOrders}`,
      trend: { value: 8.2, isPositive: false },
      colorClass: 'purchase-card',
    },
    {
      id: 'sales',
      title: 'Sales',
      unpaid: 'Unpaid Sales',
      value: '1,248',
      icon: Users,
      link: `/${APP_ROUTES.orders.root}/${APP_ROUTES.orders.saleOrders}`,
      trend: { value: 12.4, isPositive: true },
      colorClass: 'sales-card',
    },
  ]);
}
