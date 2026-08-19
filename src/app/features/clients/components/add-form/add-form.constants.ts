// src/app/features/clients/components/add-form/add-form.constants.ts

// Types
import { IFormSlideConfig } from '@components/form-slide/form-slide.types';
import { InputConfig } from '@components/input/input.types';
import { ButtonConfig } from '@components/button/button.types';

// Icons
import { User, Phone, FileKey, Badge, Hash, X } from 'lucide-angular';
// =====================================================
// INPUTS
// =====================================================

export const FORM_INPUTS: {
  name: InputConfig;
  contactNumber: InputConfig;
  taxNumber: InputConfig;
  otherIdType: InputConfig;
  otherIdNumber: InputConfig;
} = {
  name: {
    label: 'Name',
    type: 'text',
    placeholder: 'Enter client name',
    required: true,
    icon: User,
  },

  contactNumber: {
    label: 'Contact Number',
    type: 'tel',
    placeholder: 'Enter contact number',
    required: true,
    icon: Phone,
  },
  taxNumber: {
    label: 'Tax Number',
    type: 'text',
    placeholder: 'Enter tax number',
    icon: FileKey,
  },

  otherIdType: {
    label: 'Other ID Type',
    type: 'text',
    placeholder: 'Enter ID type',
    icon: Badge,
  },

  otherIdNumber: {
    label: 'Other ID Number',
    type: 'text',
    placeholder: 'Enter ID number',
    icon: Hash,
  },
};

// =====================================================
// FORM HEADER BUTTONS
// =====================================================

export const FORM_HEADER_BUTTONS: ButtonConfig = {
  label: '',
  variant: 'text',
  type: 'button',
  icon: X,
  ariaLabel: 'Close',
};

// =====================================================
// FORM FFOOTER BUTTONS
// =====================================================

export const FORM_FOOTER_BUTTONS: {
  save: ButtonConfig;
  cancel: ButtonConfig;
} = {
  save: {
    label: 'Save Client',
    variant: 'primary',
    type: 'button',
  },

  cancel: {
    label: 'Cancel',
    variant: 'secondary',
    type: 'button',
  },
};

// =====================================================
// FORM SLIDE CONFIG
// =====================================================

export const FORM_SLIDE: IFormSlideConfig = {
  title: 'Add Client',
  subtitle: 'Create a new client',
  position: 'fixed',
};
