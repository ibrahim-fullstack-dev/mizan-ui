import { LucideIconData } from 'lucide-angular';
export interface SidebarSubItem {
  label: string;
  path: string[];
  icon?: LucideIconData;
}

export interface SidebarItem {
  label: string;
  icon: LucideIconData;
  path?: string[];
  children?: SidebarSubItem[];
}
