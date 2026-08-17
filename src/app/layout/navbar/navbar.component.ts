// src/app/layout/navbar/navbar.component.ts

import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

import { ButtonComponent } from '../../shared/components/button/button.component';

// Constants
import { NAVBAR_BUTTONS } from './navbar.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  readonly buttons = NAVBAR_BUTTONS;

  readonly pageTitle = input<string>('Dashboard');

  readonly user = input<{
    name: string;
    email: string;
    avatar?: string;
  }>({
    name: 'Ibrahim Al-herby',
    email: 'ibrahim@mizan.com',
  });

  readonly toggleSidebar = output<void>();
  readonly searchClicked = output<void>();
  readonly upgradeClicked = output<void>();
  readonly themeToggleClicked = output<void>();
  readonly notificationClicked = output<void>();
  readonly profileAction = output<string>();

  readonly isProfileMenuOpen = signal(false);

  readonly isDark = signal<boolean>(
    document.documentElement.classList.contains('dark') ||
      localStorage.getItem('mizan_theme') === 'dark',
  );

  readonly isDarkMode = computed(() => this.isDark());

  readonly themeButtonConfig = computed(() => ({
    ...this.buttons.themeToggle,
    icon: this.isDarkMode() ? Moon : Sun,
  }));

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen.update((open) => !open);
  }

  onProfileOptionClick(action: string): void {
    this.profileAction.emit(action);
    this.isProfileMenuOpen.set(false);
  }

  onThemeToggle(): void {
    this.isDark.update((dark) => !dark);

    if (this.isDark()) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mizan_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mizan_theme', 'light');
    }

    this.themeToggleClicked.emit();
  }
}
