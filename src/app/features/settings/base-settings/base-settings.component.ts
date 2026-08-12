import { Component } from '@angular/core';
import { PAGE_NAVIGATION_BUTTONS } from './base-settings.constants';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-base-settings.component',
  imports: [ButtonComponent],
  templateUrl: './base-settings.component.html',
  styleUrl: './base-settings.component.css',
})
export class BaseSettingsComponent {
  pageNavigationButtons = PAGE_NAVIGATION_BUTTONS;

  onPageNavigationItemClick(key: string) {
    console.log('onPageNavigationItemClick', key);
  }
  onReset() {
    console.log('onReset');
  }
  onSave() {
    console.log('onSave');
  }
}
