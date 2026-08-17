// src/app/shared/components/input/input.types.ts

import { LucideIconData } from 'lucide-angular';

export type InputType = 'text' | 'email' | 'number' | 'password' | 'tel' | 'url' | 'date';

export interface InputConfig {
  label?: string;
  type?: InputType;
  placeholder?: string;
  icon?: LucideIconData;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}
