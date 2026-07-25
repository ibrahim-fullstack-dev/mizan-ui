import {
  Component,
  input,
  output,
  computed,
  signal,
  linkedSignal,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { LucideAngularModule } from 'lucide-angular';
import {
  TableColumn,
  TableAction,
  TableActionType,
  TableActionEvent,
  TablePageEvent,
} from './table.types';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LucideAngularModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent<T extends Record<string, any>> {
  // --- Data & Configuration Inputs ---
  data = input<any[]>([]);
  columns = input<TableColumn[]>([]);
  actions = input<TableAction[]>([]);

  /** Unique key property name to track items (e.g., 'id', 'uuid') */
  trackByProperty = input<keyof T | string>('id');

  // --- Feature Switches ---
  selectable = input<boolean>(false);
  showActions = input<boolean>(true);
  showPagination = input<boolean>(true);
  emptyMessage = input<string>('لا توجد بيانات للعرض');

  // --- Pagination Inputs ---
  totalItems = input<number>(0);
  pageSize = input<number>(10);
  currentPage = input<number>(1);

  // --- Outputs ---
  selectionChange = output<T[]>();
  actionClick = output<TableActionEvent<T>>();
  pageChange = output<TablePageEvent>();

  protected readonly pageSizeOptions = [5, 10, 25, 50, 100];

  /**
   * LinkedSignal dynamically resets selection when data changes
   * without needing manual side-effects or `effect()`.
   */
  protected selectedRowIds = linkedSignal<T[], Set<any>>({
    source: this.data,
    computation: () => new Set<any>(),
  });

  // --- Computed Helpers ---
  protected startIndex = computed(() => {
    if (this.data().length === 0) return 0;
    return (this.currentPage() - 1) * this.pageSize() + 1;
  });

  protected endIndex = computed(() => {
    const end = this.currentPage() * this.pageSize();
    const total = this.totalItems();
    return end > total ? total : end;
  });

  protected isFirstPage = computed(() => this.currentPage() === 1);

  protected isLastPage = computed(() => {
    if (this.totalItems() === 0) return true;
    const totalPages = Math.ceil(this.totalItems() / this.pageSize());
    return this.currentPage() >= totalPages;
  });

  protected isAllSelected = computed(() => {
    const currentData = this.data();
    if (currentData.length === 0) return false;
    const key = this.trackByProperty();
    return currentData.every((row) => this.selectedRowIds().has(row[key]));
  });

  protected isSomeSelected = computed(() => {
    const currentData = this.data();
    const key = this.trackByProperty();
    const selectedCount = currentData.filter((row) => this.selectedRowIds().has(row[key])).length;
    return selectedCount > 0 && selectedCount < currentData.length;
  });

  // --- Selection Logic ---
  protected getRowId(row: T): any {
    const key = this.trackByProperty();
    // استخدام bracket notation لتجنب خطأ الـ index signature
    return (row as Record<string, any>)[key as string];
  }

  protected isRowSelected(row: T): boolean {
    return this.selectedRowIds().has(this.getRowId(row));
  }

  protected toggleRowSelection(row: T, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const rowId = this.getRowId(row);
    const newSelection = new Set(this.selectedRowIds());

    if (checkbox.checked) {
      newSelection.add(rowId);
    } else {
      newSelection.delete(rowId);
    }

    this.selectedRowIds.set(newSelection);
    this.emitSelectionChange(newSelection);
  }

  protected toggleAllRows(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const newSelection = new Set(this.selectedRowIds());
    const currentData = this.data();
    const key = this.trackByProperty();

    if (checkbox.checked) {
      currentData.forEach((row) => newSelection.add(row[key]));
    } else {
      currentData.forEach((row) => newSelection.delete(row[key]));
    }

    this.selectedRowIds.set(newSelection);
    this.emitSelectionChange(newSelection);
  }

  private emitSelectionChange(selectedIds: Set<any>): void {
    const selectedObjects = this.data().filter((row) => selectedIds.has(this.getRowId(row)));
    this.selectionChange.emit(selectedObjects);
  }

  // --- User Action Events ---
  protected onActionTrigger(action: TableActionType, row: T): void {
    this.actionClick.emit({ action, row });
  }

  protected onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const newSize = parseInt(select.value, 10);
    this.pageChange.emit({ page: 1, pageSize: newSize });
  }

  protected goToPreviousPage(): void {
    if (!this.isFirstPage()) {
      this.pageChange.emit({
        page: this.currentPage() - 1,
        pageSize: this.pageSize(),
      });
    }
  }

  protected goToNextPage(): void {
    if (!this.isLastPage()) {
      this.pageChange.emit({
        page: this.currentPage() + 1,
        pageSize: this.pageSize(),
      });
    }
  }
}
