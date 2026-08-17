import { Component, computed, input, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Search } from 'lucide-angular';

import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/input/input.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { InputConfig } from '@components/input/input.types';

import { IDataPageConfig } from './data-page.types';

@Component({
  selector: 'app-data-page',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.css',
})
export class DataPageComponent<T extends { id: string | number }> {
  // =====================================================
  // PAGE CONFIGURATION
  // =====================================================

  public readonly config = input.required<IDataPageConfig<T>>();

  protected readonly searchConfig = computed<InputConfig>(() => ({
    type: 'text',
    placeholder: this.config().searchPlaceholder ?? 'Search...',
    icon: Search,
  }));

  // =====================================================
  // STATE
  // =====================================================

  protected readonly searchQuery = signal<string>('');

  // =====================================================
  // HEADER ACTION
  // =====================================================

  protected onHeaderAction(key: string): void {
    // Will be connected to feature logic.
  }

  // =====================================================
  // TAB ACTION
  // =====================================================

  protected onTabClick(key: string): void {
    // Will be connected to feature logic.
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: T['id'][]): void {
    // Will be connected to feature logic.
  }

  // =====================================================
  // TABLE PAGINATION
  // =====================================================

  protected onTablePageChange(event: TablePageEvent): void {
    // Will be connected to feature logic.
  }

  // =====================================================
  // TABLE ACTION
  // =====================================================

  protected onTableActionClick(event: TableActionEvent<T>): void {
    // Will be connected to feature logic.
  }
}
