// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Plus,
  Download,
  Pencil,
  Trash2,
  User,
  TableOfContents,
  Type,
  CirclePile,
  Component,
  CircleDollarSign,
  QrCode,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: User, sortable: true },
  { key: 'type', label: 'Type', icon: Type },
  { key: 'stock', label: 'Stock Remaining', icon: CirclePile },
  { key: 'category', label: 'Category', icon: TableOfContents },
  { key: 'sku', label: 'SKU', icon: Component },
  { key: 'default-sale-price', label: 'Default Sale Price', icon: CircleDollarSign },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'qr-code', label: 'QR Code', variant: 'secondary', icon: QrCode },
  { key: 'add-product', label: 'Add Product', variant: 'secondary', icon: Plus },
  { key: 'export-pdf', label: 'Export PDF', variant: 'outline', icon: Download },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
