export interface ISaleSettlement {
  id: number;
  saleInvoiceNumber: string;
  saleDate: string;
  settlementDate: string;
  clientName: string;
  branch: string;
  salesUser: string;
  settlementUser: number;
  settlementAmount: number;
  invoiceTotal: number;
  totalPaid: number;
  remaining: number;
}
