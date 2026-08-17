// src/app/shared/components/button/button.types.ts

import { type LucideIconData } from 'lucide-angular';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';

type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonConfig {
  label?: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  icon?: LucideIconData;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
