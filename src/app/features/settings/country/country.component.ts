// src/app/features/settings/country/country.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { ICountry } from './country.types';

import { DATA_PAGE_CONFIG, SEARCH_INPUT, HEADER_BUTTONS, TABLE_CONFIG } from './country.constants';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
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
  // UI STATE
  // =====================================================

  protected readonly searchQuery = signal('');

  // =====================================================
  // CONFIG
  // =====================================================

  protected readonly dataPageConfig = DATA_PAGE_CONFIG;
  protected readonly searchInput = SEARCH_INPUT;
  protected readonly headerButtons = HEADER_BUTTONS;

  // =====================================================
  // TABLE CONFIG
  // =====================================================

  protected readonly tableConfig = computed(() => ({
    ...TABLE_CONFIG,
    data: this.rawCountries(),
    totalItems: this.rawCountries().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'add':
        this.openAddForm();
        break;

      case 'delete-all':
        this.deleteAll();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<ICountry>): void {
    switch (event.action) {
      case 'edit':
        this.editCountry(event.id);
        break;

      case 'delete':
        this.deleteCountry(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: ICountry['id'][]): void {
    console.log('Selected country IDs:', selectedIds);
  }

  // =====================================================
  // TABLE PAGINATION
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    console.log('Page changed:', event);
  }

  // =====================================================
  // ACTIONS
  // =====================================================

  private openAddForm(): void {
    console.log('Open Add Country form');
  }

  private editCountry(id: ICountry['id']): void {
    console.log('Edit country:', id);
  }

  private deleteCountry(id: ICountry['id']): void {
    this.rawCountries.update((countries) => countries.filter((country) => country.id !== id));
  }

  private deleteAll(): void {
    this.rawCountries.set([]);
  }
}
