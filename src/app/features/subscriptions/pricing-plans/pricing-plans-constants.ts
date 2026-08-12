import { IPricingPlan } from './pricing-plans.types';

export const PRICING_PLANS_DATA: IPricingPlan[] = [
  {
    id: 'free',
    name: 'Starter',
    price: '0.00 SAR',
    period: '/ Year',
    description: 'Free Version',
    buttonText: 'Get Started Free',
    buttonConfig: {
      variant: 'outline',
      fullWidth: true,
      disabled: false,
    },
    features: {
      invoices: 'Up to 5,000 Invoices Capacity',
      databaseSize: 'Database Size: 42MB',
      storage: 'Storage: 1GB',
    },
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '540.00 SAR',
    period: '/ Year',
    description: 'Essential steps for growing projects',
    buttonText: 'Choose Basic',
    buttonConfig: {
      variant: 'outline',
      fullWidth: true,
      disabled: false,
    },
    features: {
      invoices: 'Up to 30,000 Invoices Capacity',
      databaseSize: 'Database Size: 220MB',
      storage: 'Storage: 10-10GB',
    },
  },
  {
    id: 'advanced',
    name: 'Advanced',
    badge: 'Most Popular',
    isPopular: true,
    price: '1,500.00 SAR',
    period: '/ Year',
    description: 'High performance and extended scale',
    buttonText: 'Choose Advanced',
    buttonConfig: {
      variant: 'primary',
      fullWidth: true,
      disabled: false,
    },
    features: {
      invoices: 'Up to 1 Million Invoices Capacity',
      databaseSize: 'Database Size: 7.3GB',
      storage: 'Storage: 100GB',
    },
  },
  {
    id: 'business',
    name: 'Business',
    price: '2,500.00 SAR',
    period: '/ Year',
    description: 'Maximum capacity and comprehensive enterprise tools',
    buttonText: 'Contact Sales',
    buttonConfig: {
      variant: 'secondary',
      fullWidth: true,
      disabled: false,
    },
    features: {
      invoices: 'Up to 3 Million Invoices Capacity',
      databaseSize: 'Database Size: 22GB',
      storage: 'Storage: 300GB',
    },
  },
];
