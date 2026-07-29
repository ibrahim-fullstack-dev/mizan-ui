import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsSettingsComponent } from './productions-settings.component';

describe('ProductionsSettingsComponent', () => {
  let component: ProductionsSettingsComponent;
  let fixture: ComponentFixture<ProductionsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductionsSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductionsSettingsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
