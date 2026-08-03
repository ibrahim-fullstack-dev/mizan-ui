// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { PageHeaderButton } from '@components/page-header/page-header.types';
import {
  CreditCard,
  Info,
  Calendar,
  Plus,
  Eye,
  SquareSquare,
  Undo2,
  ArrowLeftRight,
} from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'costCenter', label: 'Cost Center', icon: SquareSquare },
  { key: 'ledgerReference', label: 'Ledger Reference', icon: Undo2 },
  { key: 'reference', label: 'Reference', icon: Undo2 },
  { key: 'transactionType', label: 'Transaction Type', icon: ArrowLeftRight },
  { key: 'credit', label: 'Credit', icon: CreditCard },
  { key: 'debit', label: 'Debit', icon: CreditCard },
  { key: 'status', label: 'Status', icon: Info },
  { key: 'createdAt', label: 'Created At', icon: Calendar },
];

export const HEADER_BUTTONS: PageHeaderButton[] = [
  { key: 'add', label: 'Add', variant: 'primary', icon: Plus },
];

export const TABLE_ACTIONS: TableAction[] = [{ type: 'view', icon: Eye }];
