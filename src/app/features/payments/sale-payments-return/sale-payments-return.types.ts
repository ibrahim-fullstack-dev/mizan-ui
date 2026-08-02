export interface ISalePaymentReturn {
  id: number;
  payNumber: string;
  returnSaleInvoiceNumber: string;
  clientName: string;
  paymentMethod: string;
  amount: number;
  branch: string;
  date: string;
}
