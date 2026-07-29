export interface IProduction {
  id: number;
  operatingNumber: string;
  ManufacturingEquationName: string;
  productionDate: string;
  fromBranch: string;
  toBranch: string;
  toWarehouse: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
