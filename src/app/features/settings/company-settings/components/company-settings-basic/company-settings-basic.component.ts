import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputConfig } from '@components/input/input.types';
import { ButtonComponent } from '@components/button/button.component'; // Adjust import path if needed
import { InputComponent } from '@shared/components/input/input.component';

// Constants
import { INPUTS, BUTTONS } from './company-settings-basic.constants';

@Component({
  selector: 'app-company-settings-basic',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './company-settings-basic.component.html',
  styleUrl: './company-settings-basic.component.css',
})
export class CompanySettingsBasicComponent {
  @Output() valueChange = new EventEmitter<{ field: string; value: string }>();

  // Button & Inputs configurations
  protected readonly inputs = INPUTS;
  protected readonly buttons = BUTTONS;

  onInput(fieldKey: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement ? inputElement.value : '';
    this.valueChange.emit({ field: fieldKey, value });
  }
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  onSave(): void {
    this.save.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
