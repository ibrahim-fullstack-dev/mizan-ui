// src/app/shared/components/form-slide/form-slide.types.ts

export type FormSlidePosition = 'inline' | 'fixed';

export interface IFormSlideConfig {
  title: string;
  subtitle?: string;
  position?: FormSlidePosition;
}
