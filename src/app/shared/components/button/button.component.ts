import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
// 📥 استيراد الأنواع المفصولة
import { ButtonVariant, ButtonType } from './button.types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'], // تم تغييرها إلى CSS بناءً على طلبك السابق
})
export class ButtonComponent {
  // 📥 استخدام الأنواع المستوردة لتحديد نوع الـ Signals
  variant = input<ButtonVariant>('primary');
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  icon = input<string>('');
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
