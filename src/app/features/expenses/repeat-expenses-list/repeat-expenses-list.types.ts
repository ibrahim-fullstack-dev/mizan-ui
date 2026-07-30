export interface IRepeatExpense {
  id: number;
  referenceNumber: string;
  expenseCategory: string;
  active: boolean;
  startDate: string;
  endDate: string;
  repeat: boolean;
  nextDate: string;
}
