// src/app/features/settings/country/country.component.ts

import { Component, computed, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { DataPageComponent } from '@core/data-page/data-page.component';
import { IDataPageConfig } from '@core/data-page/data-page.types';

import { ICountry } from './country.types';

// Constants
import { DATA_PAGE_CONFIG } from './country.constants';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, DataPageComponent],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawCountries = signal<ICountry[]>([
    {
      id: 1,
      nameInArabic: 'العربية',
      nameInEnglish: 'Arabic',
      Code: 'ar',
      phoneCode: '964',
    },
    {
      id: 2,
      nameInArabic: 'الإنجليزية',
      nameInEnglish: 'English',
      Code: 'en',
      phoneCode: '44',
    },
    {
      id: 3,
      nameInArabic: 'الفرنسية',
      nameInEnglish: 'French',
      Code: 'fr',
      phoneCode: '33',
    },
  ]);

  // =====================================================
  // DATA PAGE CONFIG
  // =====================================================

  protected readonly dataPageConfig = computed<IDataPageConfig<ICountry>>(() => ({
    ...DATA_PAGE_CONFIG,

    table: {
      ...DATA_PAGE_CONFIG.table,

      data: this.rawCountries(),

      totalItems: this.rawCountries().length,
    },
  }));
}
