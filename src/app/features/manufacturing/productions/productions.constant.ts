// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Download,
  Pencil,
  Trash2,
  Hash,
  Plus,
  Eye,
  Warehouse,
  Calendar,
  Building2,
  CaseSensitive,
  Boxes,
  Ruler,
  CircleDollarSign,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'operatingNumber', label: 'Operating Number', icon: Hash },
  { key: 'ManufacturingEquationName', label: 'Manufacturing Equation Name', icon: CaseSensitive },
  { key: 'productionDate', label: 'Production Date', icon: Calendar },
  { key: 'fromBranch', label: 'From Branch', icon: Building2 },
  { key: 'toBranch', label: 'To Branch', icon: Building2 },
  { key: 'toWarehouse', label: 'To Warehouse', icon: Warehouse },
  { key: 'quantity', label: 'Quantity', icon: Boxes },
  { key: 'unitPrice', label: 'Unit Price', icon: Ruler },
  { key: 'totalPrice', label: 'Total Price', icon: CircleDollarSign },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: Plus },
  { key: 'delete', label: 'Delete All', variant: 'danger', icon: Trash2 },
  { key: 'export-pdf', label: 'Export PDF', variant: 'outline', icon: Download },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye },
  { type: 'edit', icon: Pencil },
  { type: 'delete', icon: Trash2, danger: true },
];
