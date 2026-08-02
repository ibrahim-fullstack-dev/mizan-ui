export interface IDiscount {
  id: number;
  name: string;
  discountAmount: number;
  startAt: string;
  endAt: string;
  isActive: boolean;
}
