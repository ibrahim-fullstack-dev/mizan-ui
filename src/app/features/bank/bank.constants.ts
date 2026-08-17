// src/app/features/bank/bank.constants.ts
import { TableColumn, TableAction } from '@components/table/table.types';

import { Hash, User, Type, DollarSign, Eye, Pencil, Trash2 } from 'lucide-angular';

import { IBank } from './bank.types';

// =====================================================
// BANK TABLE COLUMNS
// =====================================================

export const BANK_TABLE_COLUMNS: TableColumn<IBank>[] = [
  {
    key: 'accountName',
    label: 'Account Name',
    icon: User,
  },
  {
    key: 'accountType',
    label: 'Account Type',
    icon: Type,
  },
  {
    key: 'accountNumber',
    label: 'Account Number',
    icon: Hash,
  },
  {
    key: 'balance',
    label: 'Balance',
    icon: DollarSign,
  },
];

// =====================================================
// BANK TABLE ACTIONS
// =====================================================

export const BANK_TABLE_ACTIONS: TableAction[] = [
  {
    action: 'view',
    button: {
      label: 'View',
      icon: Eye,
      variant: 'text',
      type: 'button',
    },
  },
  {
    action: 'edit',
    button: {
      label: 'Edit',
      icon: Pencil,
      variant: 'text',
      type: 'button',
    },
  },
  {
    action: 'delete',
    button: {
      label: 'Delete',
      icon: Trash2,
      variant: 'danger',
      type: 'button',
    },
  },
];
