// src/app/layout/navbar/navbar.constants.ts

import { ButtonConfig } from '@shared/components/button/button.types';

import { Bell, Menu, Sun, Zap } from 'lucide-angular';

// =====================================================
// NAVBAR BUTTONS
// =====================================================

export const NAVBAR_BUTTONS: {
  sidebarToggle: ButtonConfig;
  upgrade: ButtonConfig;
  themeToggle: ButtonConfig;
  notifications: ButtonConfig;
} = {
  sidebarToggle: {
    variant: 'outline',
    icon: Menu,
  },

  upgrade: {
    variant: 'primary',
    icon: Zap,
    label: 'Upgrade',
  },

  themeToggle: {
    variant: 'outline',
    icon: Sun,
  },

  notifications: {
    variant: 'outline',
    icon: Bell,
  },
};
