export interface IOffer {
  id: number;
  invoiceNumber: string;
  clientName: string;
  date: string;
  expiryDate: string;
  totalAmount: number;
  balance: number;
  status: string;
}
