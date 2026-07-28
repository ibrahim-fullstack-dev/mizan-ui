// src/app/shared/components/input/input.types.ts

export type InputType = 'text' | 'email' | 'number' | 'password' | 'tel' | 'url';

export interface InputConfig {
  label?: string;
  type?: InputType;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
}
