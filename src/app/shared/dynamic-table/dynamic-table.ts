import { Component, ChangeDetectionStrategy, input, output, computed, signal } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { TableColumn } from './dynamic-table.types';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe],
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTable {
  // مدخلات إلزامية وأخرى اختيارية باستخدام الـ Signals الجديدة
  columns = input.required<TableColumn[]>();
  data = input.required<any[]>();
  emptyMessage = input<string>('No data available at the moment.');

  selectable = input<boolean>(false);

  // 🔄 إدارة حالة العناصر المحددة
  selectedRows = signal<Set<any>>(new Set());

  // 📤 مخرجات ترسل المصفوفة الجديدة للعناصر المحددة للمكون الأب
  selectionChange = output<any[]>();

  // حساب ديناميكي لعدد الأعمدة الإجمالي لضبط الـ colspan في الـ empty state
  totalColumnsCount = computed(() => {
    return this.selectable() ? this.columns().length + 1 : this.columns().length;
  });

  // حساب هل تم تحديد جميع العناصر الحالية أم لا
  isAllSelected = computed(() => {
    const currentData = this.data();
    if (currentData.length === 0) return false;
    return currentData.every((row) => this.selectedRows().has(row));
  });

  // تحديد / إلغاء تحديد سطر منفرد
  toggleRow(row: any) {
    const updated = new Set(this.selectedRows());
    if (updated.has(row)) {
      updated.delete(row);
    } else {
      updated.add(row);
    }
    this.selectedRows.set(updated);
    this.selectionChange.emit(Array.from(updated));
  }

  // تحديد / إلغاء تحديد الكل
  toggleAll() {
    const updated = new Set<any>();
    if (!this.isAllSelected()) {
      this.data().forEach((row) => updated.add(row));
    }
    this.selectedRows.set(updated);
    this.selectionChange.emit(Array.from(updated));
  }
}
