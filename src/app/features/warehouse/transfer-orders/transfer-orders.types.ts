export interface ITransferOrder {
  id: number;
  referenceName: string;
  sourceBranch: string;
  DestinationBranch: string;
  sourceWarehouse: string;
  destinationWarehouse: string;
  totalQuantity: number;
  status: string;
  transferDate: Date;
}
