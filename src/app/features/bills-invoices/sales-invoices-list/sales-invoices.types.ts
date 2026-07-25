import { ButtonConfig } from '@components/button/button.types';
export interface IBillsInvoices {
  id: number;
  invoiceNumber: string;
  clientName: string;
  totalAmount: number;
  Balance: number;
  status: string;
  date: string;
}
export interface IPageNavigationItem {
  key: string;
  buttonConfig: ButtonConfig;
  content: string;
}
