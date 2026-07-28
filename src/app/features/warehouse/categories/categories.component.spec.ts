import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSettingsComponent } from './categories.component';

describe('CategoriesSettingsComponent', () => {
  let component: CategoriesSettingsComponent;
  let fixture: ComponentFixture<CategoriesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
