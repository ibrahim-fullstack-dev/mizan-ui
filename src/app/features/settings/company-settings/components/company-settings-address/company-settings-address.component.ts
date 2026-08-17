import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputConfig } from '@components/input/input.types';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';

// Constants
import { BUTTONS, ADDRESS_INPUTS } from './company-settings-address.constants';

@Component({
  selector: 'app-company-settings-address',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './company-settings-address.component.html',
  styleUrl: './company-settings-address.component.css',
})
export class CompanySettingsAddressComponent {
  @Output() valueChange = new EventEmitter<{ field: string; value: string }>();
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  // Button configurations using ButtonConfig interface
  protected readonly addressInputs = ADDRESS_INPUTS;
  protected readonly buttons = BUTTONS;

  onInput(fieldKey: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement ? inputElement.value : '';
    this.valueChange.emit({ field: fieldKey, value });
  }

  onSave(): void {
    this.save.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
