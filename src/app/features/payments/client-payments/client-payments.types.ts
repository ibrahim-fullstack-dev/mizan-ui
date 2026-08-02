export interface IClientPayment {
  id: number;
  payNumber: string;
  clientName: string;
  paymentMethod: string;
  amount: number;
  date: string;
}
