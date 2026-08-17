export interface ICreditNote {
  id: number;
  invoiceNumber: string;
  clientName: string;
  totalAmount: number;
  balance: number;
  status: string;
  date: string;
}
