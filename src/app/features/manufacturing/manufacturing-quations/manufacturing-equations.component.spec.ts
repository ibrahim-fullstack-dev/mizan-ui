import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingQuationsComponent } from './manufacturing-equations.component';

describe('ManufacturingQuationsComponent', () => {
  let component: ManufacturingQuationsComponent;
  let fixture: ComponentFixture<ManufacturingQuationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturingQuationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturingQuationsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
