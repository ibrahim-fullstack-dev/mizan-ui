import { ButtonConfig } from '@components/button/button.types';
export interface ISalesInvoice {
  id: number;
  invoiceNumber: string;
  clientName: string;
  totalAmount: number;
  balance: number;
  status: string;
  date: string;
}
export interface IPageNavigationItem {
  key: string;
  buttonConfig: ButtonConfig;
}
