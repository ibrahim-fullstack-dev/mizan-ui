import { ButtonConfig } from '@components/button/button.types';
export interface ISaleOrder {
  id: number;
  invoiceNumber: string;
  clientName: string;
  date: string;
  Balance: number;
  status: string;
}
export interface IPageNavigationItem {
  key: string;
  buttonConfig: ButtonConfig;
  content: string;
}
