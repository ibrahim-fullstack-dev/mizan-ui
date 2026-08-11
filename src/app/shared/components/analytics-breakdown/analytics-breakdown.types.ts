import { LucideIconData } from 'lucide-angular';
export type BreakdownColorType = 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'gray';

export interface IAnalyticsCardItem {
  id: string | number;
  title: string;
  description?: string;
  value: string | number;
  icon: LucideIconData;
  colorType?: BreakdownColorType;
  link: string;
}
