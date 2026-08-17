import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonConfig } from './button.types';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-button',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  config = input<ButtonConfig>({});

  btnClick = output<MouseEvent>();

  // Resolved Config
  protected resolvedConfig = computed(() => {
    const cfg = this.config();
    return {
      label: cfg.label ?? '',
      variant: cfg.variant ?? 'primary',
      type: cfg.type ?? 'button',
      disabled: !!cfg.disabled,
      loading: !!cfg.loading,
      fullWidth: !!cfg.fullWidth,
      icon: cfg.icon,
    };
  });

  // Button Classes
  buttonClasses = computed(() => {
    const cfg = this.resolvedConfig();
    const classes = ['btn', `btn-${cfg.variant}`];

    if (cfg.fullWidth) classes.push('btn-full-width');
    if (cfg.loading) classes.push('btn-loading');

    return classes.join(' ');
  });

  // Button Click Handler
  onClick(event: MouseEvent) {
    const cfg = this.resolvedConfig();
    if (cfg.disabled || cfg.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.btnClick.emit(event);
  }
}
