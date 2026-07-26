export interface IRecurringPurchaseInvoices {
  id: number;
  invoiceNumber: string;
  status: string;
  repeat: string;
  startDate: string;
  nextDate: string;
  endDate: string;
}
