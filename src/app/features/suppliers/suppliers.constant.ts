// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import { UserPlus, Download, Pencil, Trash2, User, Mail, Phone, Eye } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: User, sortable: true },
  { key: 'email', label: 'Email Address', icon: Mail },
  { key: 'contact', label: 'Contact Number', icon: Phone },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add-supplier', label: 'Add Supplier', variant: 'primary', icon: UserPlus },
  { key: 'export-pdf', label: 'Export PDF', variant: 'outline', icon: Download },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'view', icon: Eye, label: 'View' },
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
