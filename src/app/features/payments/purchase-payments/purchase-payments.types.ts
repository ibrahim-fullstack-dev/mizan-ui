export interface IPurchasePayment {
  id: number;
  payNumber: string;
  purchaseInvoiceNumber: string;
  supplierName: string;
  paymentMethod: string;
  amount: number;
  branch: string;
  date: string;
  note: string;
}
