import { Component, input, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IButtonGroupItem, IGridProps } from './button-group.types';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-button-group',
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
})
export class ButtonGroupComponent {
  girdprops = input.required<IGridProps>();
  buttonGroup = input.required<IButtonGroupItem[]>();
  sizeClass = computed(() => `grid-size-${this.girdprops().size}`);
}
