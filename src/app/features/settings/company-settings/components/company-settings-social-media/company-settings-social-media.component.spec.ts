import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingsSocialMediaComponent } from './company-settings-social-media.component';

describe('CompanySettingsSocialMediaComponent', () => {
  let component: CompanySettingsSocialMediaComponent;
  let fixture: ComponentFixture<CompanySettingsSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySettingsSocialMediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanySettingsSocialMediaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
