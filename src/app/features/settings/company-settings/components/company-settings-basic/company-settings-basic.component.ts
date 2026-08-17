import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputConfig } from '@components/input/input.types';
import { ButtonComponent } from '@components/button/button.component'; // Adjust import path if needed
import { InputComponent } from '@shared/components/input/input.component';

// Constants
import { BUTTONS } from './company-settings-basic.constants';

@Component({
  selector: 'app-company-settings-basic',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './company-settings-basic.component.html',
  styleUrl: './company-settings-basic.component.css',
})
export class CompanySettingsBasicComponent {
  @Output() valueChange = new EventEmitter<{ field: string; value: string }>();

  // Button configurations using ButtonConfig interface
  buttons = BUTTONS;

  // Input configurations using InputConfig interface
  nameConfig: InputConfig = {
    label: 'Name',
    type: 'text',
    placeholder: 'Enter full name',
    required: true,
  };
  emailConfig: InputConfig = {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email address',
    required: true,
  };
  contactNumber2Config: InputConfig = {
    label: 'Contact Number 2',
    type: 'tel',
    placeholder: 'Enter secondary phone number',
  };
  fieldConfig: InputConfig = { label: 'Field', type: 'text', placeholder: 'Enter business field' };
  commercialRegistrationNoConfig: InputConfig = {
    label: 'Commercial Registration No.',
    type: 'text',
    placeholder: 'Enter CR number',
  };
  organizationNameConfig: InputConfig = {
    label: 'Organization Name (Company Name)',
    type: 'text',
    placeholder: 'Enter company name',
    required: true,
  };
  organizationalUnitNameConfig: InputConfig = {
    label: 'Organizational Unit Name (Branch Name)',
    type: 'text',
    placeholder: 'Enter branch name',
  };
  otherIdTypeConfig: InputConfig = {
    label: 'Other ID Type',
    type: 'text',
    placeholder: 'Enter ID type',
  };
  otherIdNumberConfig: InputConfig = {
    label: 'Other ID Number',
    type: 'text',
    placeholder: 'Enter ID number',
  };
  shortAddressConfig: InputConfig = {
    label: 'Short Address',
    type: 'text',
    placeholder: 'Enter short address',
  };

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
