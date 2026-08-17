import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputConfig } from '@components/input/input.types';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@shared/components/input/input.component';

// Constants
import { BUTTONS } from './company-settings-social-media.constants';

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

  // Social Media Button Configurations
  buttons = BUTTONS;

  // Social Media Input Configurations
  websiteConfig: InputConfig = {
    label: 'Website URL',
    type: 'url',
    placeholder: 'https://www.example.com',
  };
  linkedinConfig: InputConfig = {
    label: 'LinkedIn Profile',
    type: 'url',
    placeholder: 'https://www.linkedin.com/company/...',
  };
  twitterConfig: InputConfig = {
    label: 'Twitter / X',
    type: 'url',
    placeholder: 'https://twitter.com/...',
  };
  whatsappConfig: InputConfig = {
    label: 'WhatsApp Number',
    type: 'tel',
    placeholder: '+966 5XXXXXXXX',
  };
  facebookConfig: InputConfig = {
    label: 'Facebook Page',
    type: 'url',
    placeholder: 'https://www.facebook.com/...',
  };
  instagramConfig: InputConfig = {
    label: 'Instagram Page',
    type: 'url',
    placeholder: 'https://www.instagram.com/...',
  };
  youtubeConfig: InputConfig = {
    label: 'YouTube Channel',
    type: 'url',
    placeholder: 'https://www.youtube.com/...',
  };
  tiktokConfig: InputConfig = {
    label: 'TikTok Account',
    type: 'url',
    placeholder: 'https://www.tiktok.com/...',
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
