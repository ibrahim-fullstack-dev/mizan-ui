// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Plus,
  Eye,
  Pencil,
  Trash2,
  Warehouse,
  RotateCw,
  Boxes,
  Building2,
  Info,
  Calendar,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'referenceName', label: 'Reference Name', icon: RotateCw, sortable: true },
  { key: 'sourceBranch', label: 'Source Branch', icon: Building2 },
  { key: 'DestinationBranch', label: 'Destination Branch', icon: Building2 },
  { key: 'sourceWarehouse', label: 'Source Warehouse', icon: Warehouse },
  { key: 'destinationWarehouse', label: 'Destination Warehouse', icon: Warehouse },
  { key: 'totalQuantity', label: 'Total Quantity', icon: Boxes },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'transferDate', label: 'Transfer Date', icon: Calendar },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', icon: Plus },
  { key: 'delete-all', label: 'Delete All', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
