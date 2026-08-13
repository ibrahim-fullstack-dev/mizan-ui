import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import { Plus, Pencil, Trash2, Hash, FileText, Mail, Info, SquareStack } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'subject', label: 'Subject', icon: Hash },
  { key: 'email', label: 'Email', icon: Mail },
  { key: 'category', label: 'Category', icon: SquareStack },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'description', label: 'Description', icon: FileText },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: Plus },
];

export const TABLE_ACTIONS: TableAction[] = [
  { type: 'edit', icon: Pencil, label: 'Edit' },
  { type: 'delete', icon: Trash2, label: 'Delete', danger: true },
];
