import { Component, input, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopbarButtonConfig } from './topbar.types';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  showSearch = input<boolean>(true);
  searchPlaceholder = input<string>('Find a client...');
  searchTerm = model<string>(''); // ربط ثنائي الاتجاه لقيمة البحث

  // 📥 خصائص الأزرار المرنة (مع قيم افتراضية ذكية في حال لم يتم تمريرها)
  filterConfig = input<TopbarButtonConfig>({
    label: 'تصفية',
    icon: '🎛️',
    title: 'تصفية البيانات',
    variant: 'secondary',
  });

  exportConfig = input<TopbarButtonConfig>({
    label: 'تصدير',
    icon: '📤',
    title: 'تصدير الملف',
    variant: 'secondary',
  });

  deleteConfig = input<TopbarButtonConfig>({
    label: 'حذف',
    icon: '🗑️',
    title: 'حذف العناصر المحددة',
    variant: 'danger',
  });

  addConfig = input<TopbarButtonConfig>({
    label: 'Add New',
    icon: '➕',
    title: 'إضافة عنصر جديد',
    variant: 'primary',
  });

  // ⚙️ أزرار التحكم في تفعيل/تعطيل ظهور الأزرار
  showFilter = input<boolean>(true);
  showExport = input<boolean>(true);
  showDelete = input<boolean>(true);
  showAdd = input<boolean>(true);

  // 📤 المخرجات (Events)
  searchChange = output<string>();
  filterClick = output<void>();
  exportClick = output<void>();
  deleteClick = output<void>();
  addClick = output<void>();

  onSearch(value: string) {
    this.searchTerm.set(value);
    this.searchChange.emit(value);
  }
}
