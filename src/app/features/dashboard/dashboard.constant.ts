import { TableColumn } from '@components/table/table.types';
import {
  Hash,
  Split,
  Calendar,
  User,
  Warehouse,
  Type,
  Info,
  DollarSign,
  CirclePile,
} from 'lucide-angular';

export const AlERTS_TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: User, sortable: true },
  { key: 'sku', label: 'SKU', icon: Hash },
  { key: 'branch', label: 'Branch', icon: Split },
  { key: 'date', label: 'Date', icon: Calendar },
  { key: 'stock', label: 'Stock', icon: CirclePile },
];

export const UNPAID_SALES_TABLE_COLUMNS: TableColumn[] = [
  { key: 'invoiceNumber', label: 'Invoice Number', icon: Hash },
  { key: 'clientName', label: 'Client Name', icon: User },
  { key: 'type', label: 'Type', icon: Type },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'branch', label: 'Branch', icon: Split },
  { key: 'warehouse', label: 'Warehouse', icon: Warehouse },
  { key: 'price', label: 'Price', icon: DollarSign },
];
