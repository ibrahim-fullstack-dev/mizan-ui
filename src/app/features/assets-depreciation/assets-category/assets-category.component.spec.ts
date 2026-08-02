import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsCategoryComponent } from './assets-category.component';

describe('AssetsCategoryComponent', () => {
  let component: AssetsCategoryComponent;
  let fixture: ComponentFixture<AssetsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetsCategoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
