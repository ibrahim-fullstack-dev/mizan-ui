// src/app/shared/components/button/button.component.ts
import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonVariant, ButtonType } from './button.types';
import { LucideAngularModule, type LucideIconData } from 'lucide-angular';

@Component({
  // Component Metadata.
  selector: 'app-button',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
// Component Class.
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  icon = input<LucideIconData | undefined>(undefined);
  fullWidth = input<boolean>(false);

  btnClick = output<MouseEvent>();

  buttonClasses = computed(() => {
    const classes = ['btn'];
    classes.push(`btn-${this.variant()}`);

    if (this.fullWidth()) {
      classes.push('btn-full-width');
    }

    if (this.loading()) {
      classes.push('btn-loading');
    }

    return classes.join(' ');
  });

  onClick(event: MouseEvent) {
    if (this.disabled() || this.loading()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.btnClick.emit(event);
  }
}
