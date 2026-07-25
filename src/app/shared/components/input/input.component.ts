import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputType } from './input.types';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  value = model<string>('');

  label = input<string>('');
  type = input<InputType>('text');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  required = input<boolean>(false);
  error = input<string>('');

  // 🆔 Generate a random ID for the input element.
  protected readonly inputId = `app-input-${Math.random().toString(36).substring(2, 9)}`;

  // ✍️ Update the value of the input field.
  protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
