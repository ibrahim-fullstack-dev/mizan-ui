import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySettingsBasicComponent } from './company-settings-basic.component';

describe('CompanySettingsSlide2Component', () => {
  let component: CompanySettingsBasicComponent;
  let fixture: ComponentFixture<CompanySettingsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySettingsBasicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanySettingsBasicComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
