import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputConfig } from '@components/input/input.types';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';

// Constants
import { SOCIAL_MEDIA_INPUTS, BUTTONS } from './company-settings-social-media.constants';

@Component({
  selector: 'app-company-settings-social-media',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './company-settings-social-media.component.html',
  styleUrl: './company-settings-social-media.component.css',
})
export class CompanySettingsSocialMediaComponent {
  @Output() valueChange = new EventEmitter<{ field: string; value: string }>();
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  // Social Media Button & Inputs Configurations

  protected readonly socialMediaInputs = SOCIAL_MEDIA_INPUTS;
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
