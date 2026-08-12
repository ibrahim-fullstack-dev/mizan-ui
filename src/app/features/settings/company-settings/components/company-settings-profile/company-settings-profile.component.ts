import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Phone } from 'lucide-angular';

@Component({
  selector: 'app-company-settings-profile',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './company-settings-profile.component.html',
  styleUrl: './company-settings-profile.component.css',
})
export class CompanySettingsProfileComponent {
  companyLogoUrl: string | null = 'logo.svg';

  companyData = {
    name: 'Mizan Enterprise Accounting',
    email: 'support@mizanenterprise.com',
    emailIcon: Mail,
    phone: '+966 11 234 5678',
    phoneIcon: Phone,
  };

  onLogoSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.companyLogoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
