import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

import { SIDEBAR_NAVIGATION } from './sidebar.constant';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  protected readonly navigationItems = SIDEBAR_NAVIGATION;
  protected readonly activeDropdown = signal<string | null>(null);
  protected toggleDropdown(label: string): void {
    this.activeDropdown.update((currentLabel) => (currentLabel === label ? null : label));
  }
}
