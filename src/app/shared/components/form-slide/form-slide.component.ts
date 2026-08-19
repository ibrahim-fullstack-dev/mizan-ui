import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { X } from 'lucide-angular';

import { IFormSlideConfig } from './form-slide.types';

@Component({
  selector: 'app-form-slide',
  standalone: true,
  imports: [],
  templateUrl: './form-slide.component.html',
  styleUrl: './form-slide.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSlideComponent {
  // =====================================================
  // CONFIG
  // =====================================================

  readonly config = input.required<IFormSlideConfig>();
}
