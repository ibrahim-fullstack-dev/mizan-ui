export interface IAlert {
  id: number;
  name: string;
  SKU: string;
  Branch: string;
  date: string;
  stock: string;
}
export interface IUnpaidSales {
  id: number;
  invoiceNumber: number;
  clientName: string;
  type: string;
  status: string;
  branch: string;
  warehouse: string;
  price: number;
}
