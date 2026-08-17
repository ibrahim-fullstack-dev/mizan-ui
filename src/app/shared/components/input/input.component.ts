// src/app/shared/components/input/input.component.ts

import { Component, input, model } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

import { InputConfig } from './input.types';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  readonly config = input<InputConfig>({
    type: 'text',
    placeholder: '',
    value: '',
    disabled: false,
    required: false,
    error: '',
    icon: undefined,
  });

  readonly value = model<string>('');

  protected readonly inputId = `app-input-${Math.random().toString(36).substring(2, 9)}`;

  protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.value.set(target.value);
  }
}
