// src/app/features/settings/company-settings/components/company-settings-social-media/company-settings-social-media.constants.ts

import { ButtonConfig } from '@shared/components/button/button.types';

// =====================================================
// BUTTONS
// =====================================================

export const BUTTONS: {
  save: ButtonConfig;
  cancel: ButtonConfig;
} = {
  save: {
    variant: 'primary',
    label: 'Save Changes',
  },
  cancel: {
    variant: 'secondary',
    label: 'Cancel',
  },
};
