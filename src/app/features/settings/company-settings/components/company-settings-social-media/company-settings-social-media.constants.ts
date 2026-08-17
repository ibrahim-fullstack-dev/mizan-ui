// src/app/features/settings/company-settings/components/company-settings-social-media/company-settings-social-media.constants.ts

import { InputConfig } from '@shared/components/input/input.types';
import { ButtonConfig } from '@shared/components/button/button.types';

import {
  Globe,
  Linkedin,
  Twitter,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Music2,
} from 'lucide-angular';

// =====================================================
// SOCIAL MEDIA INPUTS
// =====================================================

export const SOCIAL_MEDIA_INPUTS: {
  website: InputConfig;
  linkedin: InputConfig;
  twitter: InputConfig;
  whatsapp: InputConfig;
  facebook: InputConfig;
  instagram: InputConfig;
  youtube: InputConfig;
  tiktok: InputConfig;
} = {
  website: {
    label: 'Website URL',
    type: 'url',
    placeholder: 'https://example.com',
    icon: Globe,
  },

  linkedin: {
    label: 'LinkedIn',
    type: 'url',
    placeholder: 'https://linkedin.com/company/...',
    icon: Linkedin,
  },

  twitter: {
    label: 'Twitter / X',
    type: 'url',
    placeholder: 'https://x.com/...',
    icon: Twitter,
  },

  whatsapp: {
    label: 'WhatsApp',
    type: 'tel',
    placeholder: '+967...',
    icon: MessageCircle,
  },

  facebook: {
    label: 'Facebook',
    type: 'url',
    placeholder: 'https://facebook.com/...',
    icon: Facebook,
  },

  instagram: {
    label: 'Instagram',
    type: 'url',
    placeholder: 'https://instagram.com/...',
    icon: Instagram,
  },

  youtube: {
    label: 'YouTube',
    type: 'url',
    placeholder: 'https://youtube.com/...',
    icon: Youtube,
  },

  tiktok: {
    label: 'TikTok',
    type: 'url',
    placeholder: 'https://tiktok.com/@...',
    icon: Music2,
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
