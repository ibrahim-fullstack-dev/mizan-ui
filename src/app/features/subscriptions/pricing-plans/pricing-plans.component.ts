import { Component } from '@angular/core';
import { PRICING_PLANS_DATA } from './pricing-plans.constants';
import { IPricingPlan } from './pricing-plans.types';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pricing-plans.component.html',
  styleUrl: './pricing-plans.component.css',
})
export class PricingPlansComponent {
  plans: IPricingPlan[] = PRICING_PLANS_DATA;

  onSelectPlan(plan: IPricingPlan): void {
    console.log('Selected plan:', plan.name);
  }
}
