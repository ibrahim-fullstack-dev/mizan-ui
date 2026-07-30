export interface IExpense {
  id: number;
  referenceNumber: string;
  expenseNote: string;
  expenseCategory: string;
  date: string;
  branch: string;
  paymentMethod: string;
  type: string;
  taxableAmount: number;
  taxAmount: number;
  totalAmount: number;
  publicNote: string;
}
