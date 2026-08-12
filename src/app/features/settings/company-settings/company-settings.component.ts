import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySettingsProfileComponent } from './components/company-settings-profile/company-settings-profile.component';
import { CompanySettingsBasicComponent } from './components/company-settings-basic/company-settings-basic.component';
import { CompanySettingsAddressComponent } from './components/company-settings-address/company-settings-address.component';
import { CompanySettingsSocialMediaComponent } from './components/company-settings-social-media/company-settings-social-media.component';
import { CompanySettingsSubscriptionsComponent } from './components/company-settings-subscriptions/company-settings-subscriptions.component';

@Component({
  selector: 'app-company-settings',
  standalone: true,
  imports: [
    CommonModule,
    CompanySettingsProfileComponent,
    CompanySettingsBasicComponent,
    CompanySettingsAddressComponent,
    CompanySettingsSocialMediaComponent,
    CompanySettingsSubscriptionsComponent,
  ],
  templateUrl: './company-settings.component.html',
  styleUrl: './company-settings.component.css',
})
export class CompanySettingsComponent {}
