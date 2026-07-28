import { Component, signal } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { DynamicTable } from '../../shared/dynamic-table/dynamic-table';
import { TableColumn } from '../../shared/dynamic-table/dynamic-table.types';

@Component({
  selector: 'app-clients',
  imports: [TopbarComponent, DynamicTable],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  tableColumns = signal<TableColumn[]>([
    { key: 'name', label: 'Client Name', type: 'text' },
    { key: 'email', label: 'Email Address', type: 'text' },
    { key: 'balance', label: 'Total Balance', type: 'currency' },
    { key: 'joinDate', label: 'Registration Date', type: 'date' },
    { key: 'status', label: 'Status', type: 'badge' },
  ]);
  clientsData = signal([
    {
      id: 1,
      name: 'Acme Corporation',
      email: 'billing@acme.com',
      balance: 14250.75,
      joinDate: new Date('2025-03-15'),
      status: { label: 'Active', style: 'success' }, // سيعطي فئة badge-success
    },
    {
      id: 2,
      name: 'Global Tech Solutions',
      email: 'info@globaltech.io',
      balance: 8900.0,
      joinDate: new Date('2025-06-01'),
      status: { label: 'Pending', style: 'warning' }, // سيعطي فئة badge-warning
    },
    {
      id: 3,
      name: 'Omar Al-Fahad Tradings',
      email: 'omar@fahad.sa',
      balance: 0.0,
      joinDate: new Date('2026-01-10'),
      status: { label: 'Suspended', style: 'danger' }, // سيعطي فئة badge-danger
    },
  ]);
  onClientSelectionChange(selectedRows: any[]) {
    this.selectedClientsList = selectedRows;
    console.log('العملاء المحددون حالياً:', this.selectedClientsList);
  }

  selectedClientsList: any[] = [];
  handleSearch(query: string) {
    console.log('handle search:', query);
  }

  openAddClientModal() {
    console.log('open add client modal');
  }

  deleteSelectedClients() {
    console.log('delete selected clients');
  }

  exportToExcel() {
    console.log('export to excel');
  }

  toggleFilterDrawer() {
    console.log('toggle filter drawer');
  }
}
