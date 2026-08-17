export interface IPurchaseReturn {
  id: number;
  invoiceNumber: string;
  purchaseInvoiceNumber: string;
  supplierName: string;
  branchName: string;
  totalPrice: number;
  balance: number;
  status: string;
  returnDate: string;
}
