// src/app/features/settings/company-settings/components/company-settings-basic/company-settings-basic.constants.ts

import { InputConfig } from '@shared/components/input/input.types';
import { ButtonConfig } from '@shared/components/button/button.types';

import {
  User,
  Mail,
  Phone,
  BriefcaseBusiness,
  FileKey,
  Building2,
  GitBranch,
  Badge,
  Hash,
  MapPin,
} from 'lucide-angular';

// =====================================================
// INPUT CONFIGS
// =====================================================

export const INPUTS: {
  name: InputConfig;
  email: InputConfig;
  contactNumber2: InputConfig;
  field: InputConfig;
  commercialRegistrationNo: InputConfig;
  organizationName: InputConfig;
  organizationalUnitName: InputConfig;
  otherIdType: InputConfig;
  otherIdNumber: InputConfig;
  shortAddress: InputConfig;
} = {
  name: {
    label: 'Name',
    type: 'text',
    placeholder: 'Enter company name',
    icon: User,
  },

  email: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter company email',
    icon: Mail,
  },

  contactNumber2: {
    label: 'Contact Number 2',
    type: 'tel',
    placeholder: 'Enter secondary contact number',
    icon: Phone,
  },

  field: {
    label: 'Field',
    type: 'text',
    placeholder: 'Enter business field',
    icon: BriefcaseBusiness,
  },

  commercialRegistrationNo: {
    label: 'Commercial Registration No.',
    type: 'text',
    placeholder: 'Enter commercial registration number',
    icon: FileKey,
  },

  organizationName: {
    label: 'Organization Name',
    type: 'text',
    placeholder: 'Enter organization name',
    icon: Building2,
  },

  organizationalUnitName: {
    label: 'Organizational Unit Name',
    type: 'text',
    placeholder: 'Enter branch name',
    icon: GitBranch,
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

  shortAddress: {
    label: 'Short Address',
    type: 'text',
    placeholder: 'Enter short address',
    icon: MapPin,
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
