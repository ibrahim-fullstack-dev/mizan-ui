import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { PageHeaderButton } from './page-header.types';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent {
  buttons = input<PageHeaderButton[]>([]);

  searchChanged = output<string>();
  buttonClicked = output<string>();

  protected onButtonClick(key: string): void {
    this.buttonClicked.emit(key);
  }
}
