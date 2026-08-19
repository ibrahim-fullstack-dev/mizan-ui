import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSlideComponent } from './form-slide.component';

describe('FormSlideComponent', () => {
  let component: FormSlideComponent;
  let fixture: ComponentFixture<FormSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSlideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSlideComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
