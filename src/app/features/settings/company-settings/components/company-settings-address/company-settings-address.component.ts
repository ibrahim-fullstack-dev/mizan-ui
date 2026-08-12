import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputConfig } from '@components/input/input.types';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@shared/components';

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

  // Address Input Configurations
  streetNameConfig: InputConfig = {
    label: 'Street Name',
    type: 'text',
    placeholder: 'Enter street name',
    required: true,
  };
  buildingNoConfig: InputConfig = {
    label: 'Building No',
    type: 'text',
    placeholder: 'Enter building number',
    required: true,
  };
  subdivisionConfig: InputConfig = {
    label: 'Subdivision',
    type: 'text',
    placeholder: 'Enter subdivision/district',
  };
  cityConfig: InputConfig = {
    label: 'City',
    type: 'text',
    placeholder: 'Enter city name',
    required: true,
  };
  postalCodeConfig: InputConfig = {
    label: 'Postal Code',
    type: 'text',
    placeholder: 'Enter postal code',
  };
  countryConfig: InputConfig = {
    label: 'Country',
    type: 'text',
    placeholder: 'Saudi Arabia',
    disabled: true,
    required: true,
  };

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
