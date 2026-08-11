import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { IAnalyticsCardItem } from './analytics-breakdown.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-analytics-card',
  imports: [LucideAngularModule, RouterLink, NgClass],
  templateUrl: './analytics-breakdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './analytics-breakdown.component.css',
})
export class AnalyticsBreakdown {
  readonly card = input.required<IAnalyticsCardItem>();
}
