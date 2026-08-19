// src/app/shared/components/page-layout/page-layout.types.ts

import { ButtonConfig } from '@components/button/button.types';

// =====================================================
// PAGE LAYOUT
// =====================================================

export interface IPageLayout {
  showPageHeader?: boolean;
  showToolbar: boolean;
  showTabs: boolean;
  showTable: boolean;
}

// =====================================================
// PAGE LAYOUT CONFIG
// =====================================================

export interface IPageLayoutConfig {
  title?: string;
  subtitle?: string;
  layout: IPageLayout;
}

// =====================================================
// PAGE ACTION
// =====================================================

export interface IPageAction {
  key: string;
  buttonConfig: ButtonConfig;
}
