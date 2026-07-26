import { ButtonConfig } from '@components/button/button.types';
export interface IOffers {
  id: number;
  invoiceNumber: string;
  clientName: string;
  date: string;
  expiryDate: string;
  Balance: number;
  status: string;
}
export interface IPageNavigationItem {
  key: string;
  buttonConfig: ButtonConfig;
  content: string;
}
