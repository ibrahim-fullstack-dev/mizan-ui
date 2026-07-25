// src/app/shared/components/button/button.types.ts

import { type LucideIconData } from 'lucide-angular';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonConfig {
  variant?: ButtonVariant;
  type?: ButtonType;
  icon?: LucideIconData;
  fullWidth?: boolean;
  disabled?: boolean;
}
