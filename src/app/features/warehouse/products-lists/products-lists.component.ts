// src/app/features/warehouse/products-lists/products-lists.component.ts

import { Component, computed, signal } from '@angular/core';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { InputComponent } from '@components/input/input.component';
import { ButtonComponent } from '@components/button/button.component';
import { TableComponent } from '@components/table/table.component';

import { TableActionEvent, TablePageEvent } from '@components/table/table.types';

import { IProductList } from './products-lists.types';

import {
  DATA_PAGE_CONFIG,
  SEARCH_INPUT,
  HEADER_BUTTONS,
  TABLE_CONFIG,
} from './products-lists.constants';

@Component({
  selector: 'app-products-lists',
  standalone: true,
  imports: [PageLayoutComponent, InputComponent, ButtonComponent, TableComponent],
  templateUrl: './products-lists.component.html',
  styleUrl: './products-lists.component.css',
})
export class ProductsListsComponent {
  // =====================================================
  // DATA
  // =====================================================

  private readonly rawProducts = signal<IProductList[]>([
    {
      id: 1,
      name: 'Camera',
      type: 'Camera',
      stock: 10,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 1000,
    },
    {
      id: 2,
      name: 'Bike',
      type: 'Bike',
      stock: 5,
      category: 'Sports',
      sku: '987654321',
      defaultSalePrice: 500,
    },
    {
      id: 3,
      name: 'Phone',
      type: 'Phone',
      stock: 20,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 800,
    },
    {
      id: 4,
      name: 'Laptop',
      type: 'Laptop',
      stock: 15,
      category: 'Electronics',
      sku: '987654321',
      defaultSalePrice: 600,
    },
    {
      id: 5,
      name: 'Monitor',
      type: 'Monitor',
      stock: 25,
      category: 'Electronics',
      sku: '123456789',
      defaultSalePrice: 1200,
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
    data: this.rawProducts(),
    totalItems: this.rawProducts().length,
  }));

  // =====================================================
  // HEADER ACTIONS
  // =====================================================

  protected onHeaderAction(key: string): void {
    switch (key) {
      case 'qr-code':
        this.generateQrCode();
        break;

      case 'add-product':
        this.openAddForm();
        break;

      case 'export-pdf':
        this.exportPdf();
        break;

      default:
        console.warn(`Unhandled header action: ${key}`);
    }
  }

  // =====================================================
  // TABLE ACTIONS
  // =====================================================

  protected onTableAction(event: TableActionEvent<IProductList>): void {
    switch (event.action) {
      case 'edit':
        this.editProduct(event.id);
        break;

      case 'delete':
        this.deleteProduct(event.id);
        break;

      default:
        console.warn(`Unhandled table action: ${event.action}`);
    }
  }

  // =====================================================
  // TABLE SELECTION
  // =====================================================

  protected onTableSelectionChange(selectedIds: IProductList['id'][]): void {
    console.log('Selected product IDs:', selectedIds);
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

  private generateQrCode(): void {
    console.log('Generate QR codes for products');
  }

  private openAddForm(): void {
    console.log('Open Add Product form');
  }

  private editProduct(id: IProductList['id']): void {
    console.log('Edit product:', id);
  }

  private deleteProduct(id: IProductList['id']): void {
    this.rawProducts.update((products) => products.filter((product) => product.id !== id));
  }

  private exportPdf(): void {
    console.log('Exporting products to PDF...');
  }
}
