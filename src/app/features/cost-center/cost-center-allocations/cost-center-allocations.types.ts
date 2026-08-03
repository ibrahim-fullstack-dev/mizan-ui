export interface ICostCenterAllocation {
  id: number;
  costCenter: string;
  ledgerReference: string;
  reference: string;
  transactionType: string;
  credit: number;
  debit: number;
  status: string;
  createdAt: string;
}
