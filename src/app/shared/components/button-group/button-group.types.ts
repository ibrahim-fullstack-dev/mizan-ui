import { LucideIconData } from 'lucide-angular';
export interface IButtonGroupItem {
  title: string;
  description: string;
  icon: LucideIconData;
  link: string;
}
export type TGridSize = 'small' | 'medium' | 'large';

export interface IGridProps {
  gridTitle: string;
  size: TGridSize;
  showDescription: boolean;
}
