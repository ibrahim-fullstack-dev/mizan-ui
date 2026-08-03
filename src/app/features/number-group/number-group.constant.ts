// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  Plus,
  Pencil,
  Trash2,
  ArrowBigRight,
  Hash,
  Info,
  Section,
  PanelLeftDashed,
  Ellipsis,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name', icon: Hash },
  { key: 'prefix', label: 'Prefix', icon: Ellipsis },
  { key: 'next', label: 'Next', icon: ArrowBigRight },
  { key: 'section', label: 'Section', icon: Section },
  { key: 'leftPad', label: 'Left Pad', icon: PanelLeftDashed },
  { key: 'yearPrefix', label: 'Year Prefix', icon: Ellipsis },
  { key: 'monthPrefix', label: 'Month Prefix', icon: Ellipsis },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'USED', label: 'USED', icon: Info },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: Plus },
  { key: 'delete-all', label: 'Delete All', variant: 'danger', icon: Trash2 },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
