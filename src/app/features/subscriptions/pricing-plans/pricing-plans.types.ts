import { ButtonConfig } from '@shared/components/button/button.types';

export interface IPricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  period: string;
  description: string;
  buttonConfig: ButtonConfig;
  features: {
    invoices: string;
    databaseSize: string;
    storage: string;
  };
}
