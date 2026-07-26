import { ButtonConfig } from '@components/button/button.types';
export interface IPurchaseOrder {
  id: number;
  invoiceNumber: string;
  supplierName: string;
  BranchName: string;
  warehouseName: string;
  date: string;
  Balance: number;
  status: string;
}
export interface IPageNavigationItem {
  key: string;
  buttonConfig: ButtonConfig;
  content: string;
}
