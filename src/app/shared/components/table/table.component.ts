// src/app/shared/components/table/table.component.ts

import { Component, computed, input, output, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { LucideAngularModule } from 'lucide-angular';

import { ButtonConfig } from '../button/button.types';

import {
  TableActionEvent,
  TableActionType,
  TableConfig,
  TableId,
  TablePageEvent,
} from './table.types';

import { PAGE_SIZE_OPTIONS } from './table.constants';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LucideAngularModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T extends { id: TableId }> {
  // =====================================================
  // INPUT
  // =====================================================

  public readonly config = input.required<TableConfig<T>>();

  // =====================================================
  // OUTPUTS
  // =====================================================

  /**
   * Emits only the selected row IDs.
   */
  public readonly selectionChange = output<T['id'][]>();

  /**
   * Emits when the page or page size changes.
   */
  public readonly pageChange = output<TablePageEvent>();

  /**
   * Emits when a row action is triggered.
   */
  public readonly actionClick = output<TableActionEvent<T>>();

  // =====================================================
  // CONSTANTS
  // =====================================================

  protected readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  // =====================================================
  // RESOLVED CONFIG
  // =====================================================

  protected readonly resolvedConfig = computed(() => {
    const config = this.config();

    return {
      data: config.data ?? [],

      columns: config.columns,

      actions: config.actions ?? [],

      selectable: config.selectable ?? false,

      showActions: config.showActions ?? (config.actions?.length ?? 0) > 0,

      showPagination: config.showPagination ?? true,

      emptyMessage: config.emptyMessage ?? 'No items found.',

      totalItems: config.totalItems ?? config.data?.length ?? 0,

      pageSize: config.pageSize ?? 10,

      currentPage: config.currentPage ?? 1,
    };
  });

  // =====================================================
  // SELECTION STATE
  // =====================================================

  /**
   * Stores selected row IDs.
   */
  protected readonly selectedRowIds = signal<Set<T['id']>>(new Set());

  // =====================================================
  // PAGINATION STATE
  // =====================================================

  protected readonly startIndex = computed(() => {
    const config = this.resolvedConfig();

    if (config.data.length === 0) {
      return 0;
    }

    return (config.currentPage - 1) * config.pageSize + 1;
  });

  protected readonly endIndex = computed(() => {
    const config = this.resolvedConfig();

    if (config.data.length === 0) {
      return 0;
    }

    return Math.min(config.currentPage * config.pageSize, config.totalItems);
  });

  protected readonly isFirstPage = computed(() => {
    return this.resolvedConfig().currentPage === 1;
  });

  protected readonly isLastPage = computed(() => {
    const config = this.resolvedConfig();

    if (config.totalItems === 0) {
      return true;
    }

    const totalPages = Math.ceil(config.totalItems / config.pageSize);

    return config.currentPage >= totalPages;
  });

  protected readonly previousPageButton = computed<ButtonConfig>(() => ({
    label: 'Previous',
    variant: 'text',
    type: 'button',
    disabled: this.isFirstPage(),
  }));

  protected readonly nextPageButton = computed<ButtonConfig>(() => ({
    label: 'Next',
    variant: 'text',
    type: 'button',
    disabled: this.isLastPage(),
  }));

  // =====================================================
  // ROW SELECTION
  // =====================================================

  protected isRowSelected(row: T): boolean {
    return this.selectedRowIds().has(row.id);
  }

  // =====================================================
  // SELECT ALL STATE
  // =====================================================

  protected readonly isAllSelected = computed(() => {
    const data = this.resolvedConfig().data;

    if (data.length === 0) {
      return false;
    }

    return data.every((row) => this.selectedRowIds().has(row.id));
  });

  protected readonly isSomeSelected = computed(() => {
    const data = this.resolvedConfig().data;

    if (data.length === 0) {
      return false;
    }

    const selectedCount = data.filter((row) => this.selectedRowIds().has(row.id)).length;

    return selectedCount > 0 && selectedCount < data.length;
  });

  // =====================================================
  // TOGGLE SINGLE ROW
  // =====================================================

  protected toggleRowSelection(row: T, event: Event): void {
    const checkbox = event.target as HTMLInputElement;

    const newSelection = new Set(this.selectedRowIds());

    if (checkbox.checked) {
      newSelection.add(row.id);
    } else {
      newSelection.delete(row.id);
    }

    this.selectedRowIds.set(newSelection);

    this.emitSelectionChange();
  }

  // =====================================================
  // TOGGLE ALL CURRENT PAGE ROWS
  // =====================================================

  protected toggleAllRows(event: Event): void {
    const checkbox = event.target as HTMLInputElement;

    const data = this.resolvedConfig().data;

    const newSelection = new Set(this.selectedRowIds());

    if (checkbox.checked) {
      data.forEach((row) => {
        newSelection.add(row.id);
      });
    } else {
      data.forEach((row) => {
        newSelection.delete(row.id);
      });
    }

    this.selectedRowIds.set(newSelection);

    this.emitSelectionChange();
  }

  // =====================================================
  // EMIT SELECTION
  // =====================================================

  private emitSelectionChange(): void {
    this.selectionChange.emit(Array.from(this.selectedRowIds()));
  }

  // =====================================================
  // ACTIONS
  // =====================================================

  protected onActionTrigger(action: TableActionType, id: T['id']): void {
    this.actionClick.emit({
      action,
      id,
    });
  }
  // =====================================================
  // PAGE SIZE
  // =====================================================

  protected onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;

    const pageSize = Number(select.value);

    this.pageChange.emit({
      page: 1,
      pageSize,
    });
  }

  // =====================================================
  // PREVIOUS PAGE
  // =====================================================

  protected goToPreviousPage(): void {
    const config = this.resolvedConfig();

    if (this.isFirstPage()) {
      return;
    }

    this.pageChange.emit({
      page: config.currentPage - 1,
      pageSize: config.pageSize,
    });
  }

  // =====================================================
  // NEXT PAGE
  // =====================================================

  protected goToNextPage(): void {
    const config = this.resolvedConfig();

    if (this.isLastPage()) {
      return;
    }

    this.pageChange.emit({
      page: config.currentPage + 1,
      pageSize: config.pageSize,
    });
  }
}
