import { Component, ChangeDetectionStrategy, input, output, signal, computed } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Menu,
  Search,
  Bell,
  Zap,
  Sun,
  Moon,
  User,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  readonly Menu = Menu;
  readonly Search = Search;
  readonly Bell = Bell;
  readonly Zap = Zap;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly User = User;
  readonly Settings = Settings;
  readonly LogOut = LogOut;
  readonly ChevronDown = ChevronDown;

  readonly pageTitle = input<string>('Dashboard');
  readonly user = input<{ name: string; email: string; avatar?: string }>({
    name: 'Ibrahim Al-herby',
    email: 'ibrahim@mizan.com',
  });

  readonly toggleSidebar = output<void>();
  readonly searchClicked = output<void>();
  readonly upgradeClicked = output<void>();
  readonly themeToggleClicked = output<void>();
  readonly notificationClicked = output<void>();
  readonly profileAction = output<string>();

  readonly isProfileMenuOpen = signal<boolean>(false);

  readonly isDark = signal<boolean>(
    document.documentElement.classList.contains('dark') ||
      localStorage.getItem('mizan_theme') === 'dark',
  );

  readonly isDarkMode = computed(() => this.isDark());

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

    // إذا كنت تريد أيضاً إعلام الأب بأن زر الثيم تم ضغطه (اختياري)
    this.themeToggleClicked.emit();
  }
}
