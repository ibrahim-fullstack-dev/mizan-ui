import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingsAddressComponent } from './company-settings-address.component';

describe('CompanySettingsAddressComponent', () => {
  let component: CompanySettingsAddressComponent;
  let fixture: ComponentFixture<CompanySettingsAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySettingsAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanySettingsAddressComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
