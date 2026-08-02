export interface IPurchasePaymentReturn {
  id: number;
  payNumber: string;
  returnedPurchaseInvoiceNumber: string;
  supplierName: string;
  paymentMethod: string;
  amount: number;
  date: string;
}
