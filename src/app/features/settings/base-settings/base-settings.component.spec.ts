import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSettingsComponent } from './base-settings.component';

describe('BaseSettingsComponent', () => {
  let component: BaseSettingsComponent;
  let fixture: ComponentFixture<BaseSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
