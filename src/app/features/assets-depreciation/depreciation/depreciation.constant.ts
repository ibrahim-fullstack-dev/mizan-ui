// src/app/features/clients/clients.constant.ts
import { TableColumn, TableAction } from '@components/table/table.types';
import { CornerUpRight, Calendar } from 'lucide-angular';

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'reference', label: 'Reference', icon: CornerUpRight },
  { key: 'fromDate', label: 'From Date', icon: Calendar },
  { key: 'toDate', label: 'To Date', icon: Calendar },
];
