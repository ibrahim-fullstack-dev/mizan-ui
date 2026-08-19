// src/app/features/clients/components/add-form/add-form.component.ts

import { Component, output } from '@angular/core';

import { FormSlideComponent } from '@shared/components/form-slide/form-slide.component';
import { InputComponent } from '@shared/components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';

import {
  FORM_SLIDE,
  FORM_INPUTS,
  FORM_FOOTER_BUTTONS,
  FORM_HEADER_BUTTONS,
} from './add-form.constants';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormSlideComponent, InputComponent, ButtonComponent],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent {
  readonly close = output<void>();

  protected readonly formSlide = FORM_SLIDE;
  protected readonly inputs = FORM_INPUTS;
  protected readonly footerButtons = FORM_FOOTER_BUTTONS;
  protected readonly closeButton = FORM_HEADER_BUTTONS;

  protected onCancel(): void {
    console.log('Cancelled adding client.');

    this.close.emit();
  }

  protected onClose(): void {
    console.log('Closed form.');
    this.close.emit();
  }

  protected onSave(): void {
    console.log('Saved client.');

    // validation
    // API call
    // reset form

    this.close.emit();
  }
}
