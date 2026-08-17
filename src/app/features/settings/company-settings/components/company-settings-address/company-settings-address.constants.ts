// src/app/features/settings/company-settings/components/company-settings-address/company-settings-address.constants.ts

import { InputConfig } from '@shared/components/input/input.types';
import { ButtonConfig } from '@shared/components/button/button.types';

import { MapPin, Building2, Map, Mail, Globe } from 'lucide-angular';

// =====================================================
// ADDRESS INPUTS
// =====================================================

export const ADDRESS_INPUTS: {
  streetName: InputConfig;
  buildingNo: InputConfig;
  subdivision: InputConfig;
  city: InputConfig;
  postalCode: InputConfig;
  country: InputConfig;
} = {
  streetName: {
    label: 'Street Name',
    type: 'text',
    placeholder: 'Enter street name',
    icon: MapPin,
  },

  buildingNo: {
    label: 'Building No',
    type: 'text',
    placeholder: 'Enter building number',
    icon: Building2,
  },

  subdivision: {
    label: 'Subdivision',
    type: 'text',
    placeholder: 'Enter subdivision',
    icon: Map,
  },

  city: {
    label: 'City',
    type: 'text',
    placeholder: 'Enter city',
    icon: Building2,
  },

  postalCode: {
    label: 'Postal Code',
    type: 'text',
    placeholder: 'Enter postal code',
    icon: Mail,
  },

  country: {
    label: 'Country',
    type: 'text',
    value: 'Saudi Arabia',
    placeholder: 'Saudi Arabia',
    disabled: true,
    icon: Globe,
  },
};

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
    type: 'button',
  },

  cancel: {
    variant: 'secondary',
    label: 'Cancel',
    type: 'button',
  },
};
