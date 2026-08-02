export interface ISalePayment {
  id: number;
  payNumber: string;
  saleInvoiceNumber: string;
  clientName: string;
  paymentMethod: string;
  amount: number;
  branch: string;
  date: string;
  note: string;
}
