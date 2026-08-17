import { ButtonConfig } from '@components/button/button.types';

export interface ICostCenterRule {
  id: number;
  invoiceNumber: string;
  clientName: string;
  date: string;
  expiryDate: string;
  balance: number;
  status: string;
}
export interface IPageNavigationItem {
  key: string;
  buttonConfig: ButtonConfig;
}
