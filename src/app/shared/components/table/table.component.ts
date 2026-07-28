// src/app/shared/components/table/table.component.ts

import { Component, input, output, computed, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  data = input<any[]>([]);
  columns = input<TableColumn[]>([]);
  actions = input<TableAction[]>([]);

  totalItems = input<number>(0);
  pageSize = input<number>(10);
  currentPage = input<number>(1);

  selectionChange = output<any[]>();
  actionClick = output<TableActionEvent>();
  pageChange = output<TablePageEvent>();

  protected readonly pageSizeOptions = [5, 10, 25, 50, 100];
  protected selectedRows = signal<Set<any>>(new Set());

  constructor() {
    effect(
      () => {
        this.data();
        this.selectedRows.set(new Set());
        this.selectionChange.emit([]);
      },
      { allowSignalWrites: true },
    );
  }

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

  protected isRowSelected(row: any): boolean {
    return this.selectedRows().has(row);
  }

  protected isAllSelected = computed(() => {
    const currentData = this.data();
    if (currentData.length === 0) return false;
    return currentData.every((row) => this.selectedRows().has(row));
  });

  protected isSomeSelected = computed(() => {
    const currentData = this.data();
    const selectedCount = currentData.filter((row) => this.selectedRows().has(row)).length;
    return selectedCount > 0 && selectedCount < currentData.length;
  });

  protected toggleRowSelection(row: any, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const newSelection = new Set(this.selectedRows());

    if (checkbox.checked) {
      newSelection.add(row);
    } else {
      newSelection.delete(row);
    }

    this.selectedRows.set(newSelection);
    this.selectionChange.emit(Array.from(newSelection));
  }

  protected toggleAllRows(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const newSelection = new Set(this.selectedRows());
    const currentData = this.data();

    if (checkbox.checked) {
      currentData.forEach((row) => newSelection.add(row));
    } else {
      currentData.forEach((row) => newSelection.delete(row));
    }

    this.selectedRows.set(newSelection);
    this.selectionChange.emit(Array.from(newSelection));
  }

  protected onActionTrigger(action: TableActionType, row: any): void {
    this.actionClick.emit({ action, row });
  }

  protected onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const newSize = parseInt(select.value, 10);
    this.pageChange.emit({ page: 1, pageSize: newSize });
  }

  protected goToPreviousPage(): void {
    if (!this.isFirstPage()) {
      this.pageChange.emit({ page: this.currentPage() - 1, pageSize: this.pageSize() });
    }
  }

  protected goToNextPage(): void {
    if (!this.isLastPage()) {
      this.pageChange.emit({ page: this.currentPage() + 1, pageSize: this.pageSize() });
    }
  }
}
