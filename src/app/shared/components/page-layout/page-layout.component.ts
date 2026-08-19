// src/app/shared/components/data-page/data-page.component.ts

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IPageLayoutConfig } from './page-layout.types';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {
  readonly config = input.required<IPageLayoutConfig>();
}
