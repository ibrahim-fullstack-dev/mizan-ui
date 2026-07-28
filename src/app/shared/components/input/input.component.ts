import { Component, input, forwardRef, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from './input.types';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  private cdr = inject(ChangeDetectorRef);

  // 📥 المدخلات باستخدام الـ Signals
  label = input<string>('');
  type = input<InputType>('text');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  required = input<boolean>(false);
  error = input<string>('');

  // ⚙️ توليد معرّف فريد تلقائياً لربط الـ Label بالـ Input لضمان الوصولية (Accessibility)
  protected readonly inputId = `app-input-${Math.random().toString(36).substring(2, 9)}`;

  // 💾 الاحتفاظ بالقيمة الداخلية للحقل
  protected value: string = '';

  // 🔄 دالتا الوظائف المرجعية التي تمررهما Angular لتحديث حالة النموذج الأب
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  // ⬇️ 1. كتابة القيمة من النموذج الأب إلى الحقل الداخلي
  writeValue(value: any): void {
    this.value = value !== null && value !== undefined ? value : '';
    this.cdr.markForCheck(); // تضمن تحديث الواجهة حتى مع استخدام OnPush Strategy
  }

  // ⬆️ 2. تسجيل دالة التغيير لإبلاغ Angular عند تعديل النص
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // ⬆️ 3. تسجيل دالة اللمس لإبلاغ Angular عند مغادرة الحقل
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // 🚫 4. التحكم بحالة التعطيل من النموذج الأب ديناميكياً
  setDisabledState?(isDisabled: boolean): void {
    // نعتمد هنا على تحديث الواجهة تلقائياً أو معالجة الحالة برمجياً إذا لزم الأمر
    this.cdr.markForCheck();
  }

  // ✍️ معالجة تغير النص وتمريره للنموذج الأب
  protected onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
  }

  // 🎯 معالجة مغادرة الحقل لتفعيل الـ validation
  protected onInputBlur(): void {
    this.onTouched();
  }
}
