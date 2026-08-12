import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingsProfileComponent } from './company-settings-profile.component';

describe('CompanySettingsSlide1', () => {
  let component: CompanySettingsProfileComponent;
  let fixture: ComponentFixture<CompanySettingsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySettingsProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanySettingsProfileComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
