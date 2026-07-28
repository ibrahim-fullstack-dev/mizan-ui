// src/app/shared/components/button/button.types.ts

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';

export type ButtonType = 'button' | 'submit' | 'reset';

// يمكنك أيضاً كتابة واجهة إعدادات للزر إذا رغبت في استخدامه بشكل ديناميكي لاحقاً
export interface ButtonConfig {
  variant?: ButtonVariant;
  type?: ButtonType;
  icon?: string;
  fullWidth?: boolean;
}
