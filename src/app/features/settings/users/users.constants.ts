// src/app/features/settings/users/users.constants.ts

import { TableColumn, TableAction } from '@components/table/table.types';

import { IDataPageConfig, IPageAction, IPageLayout } from '@core/data-page/data-page.types';

import {
  UserPlus,
  Pencil,
  Trash2,
  User,
  Mail,
  Phone,
  Eye,
  UserRoundKey,
  BrickWallShield,
  LogIn,
} from 'lucide-angular';

import { IUser } from './users.types';

// =====================================================
// PAGE LAYOUT
// =====================================================

export const PAGE_LAYOUT: IPageLayout = {
  showToolbar: true,
  showTabs: false,
  showTable: true,
};

// =====================================================
// TABLE COLUMNS
// =====================================================

export const TABLE_COLUMNS: TableColumn<IUser>[] = [
  {
    key: 'name',
    label: 'Name',
    icon: User,
  },
  {
    key: 'userName',
    label: 'User Name',
    icon: User,
  },
  {
    key: 'email',
    label: 'Email',
    icon: Mail,
  },
  {
    key: 'phone',
    label: 'Phone',
    icon: Phone,
  },
  {
    key: 'type',
    label: 'Type',
    icon: BrickWallShield,
  },
  {
    key: 'role',
    label: 'Role',
    icon: UserRoundKey,
  },
  {
    key: 'lastLogin',
    label: 'Last Login',
    icon: LogIn,
  },
];

// =====================================================
// HEADER BUTTONS
// =====================================================

export const HEADER_BUTTONS: IPageAction[] = [
  {
    key: 'add',
    buttonConfig: {
      label: 'Add User',
      variant: 'primary',
      icon: UserPlus,
      type: 'button',
    },
  },
  {
    key: 'delete',
    buttonConfig: {
      label: 'Delete',
      variant: 'danger',
      icon: Trash2,
      type: 'button',
    },
  },
];

// =====================================================
// TABLE ACTIONS
// =====================================================

export const TABLE_ACTIONS: TableAction[] = [
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

// =====================================================
// DATA PAGE CONFIG
// =====================================================

export const DATA_PAGE_CONFIG: IDataPageConfig<IUser> = {
  layout: PAGE_LAYOUT,

  headerButtons: HEADER_BUTTONS,

  tabs: [],

  table: {
    columns: TABLE_COLUMNS,

    actions: TABLE_ACTIONS,

    selectable: true,

    showActions: true,

    showPagination: true,

    emptyMessage: 'No users found.',
  },
};
