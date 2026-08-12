import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingsComponent } from './company-settings.component';

describe('CompanySettingsComponent', () => {
  let component: CompanySettingsComponent;
  let fixture: ComponentFixture<CompanySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanySettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
