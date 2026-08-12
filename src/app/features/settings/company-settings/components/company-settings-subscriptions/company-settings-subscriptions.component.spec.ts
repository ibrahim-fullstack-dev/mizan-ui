import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingsSubscriptionsComponent } from './company-settings-subscriptions.component';

describe('CompanySettingsSubscriptionsComponent', () => {
  let component: CompanySettingsSubscriptionsComponent;
  let fixture: ComponentFixture<CompanySettingsSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySettingsSubscriptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanySettingsSubscriptionsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
