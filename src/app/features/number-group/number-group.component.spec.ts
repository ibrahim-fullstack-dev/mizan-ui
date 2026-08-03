import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGroupComponent } from './number-group.component';

describe('NumberGroupComponent', () => {
  let component: NumberGroupComponent;
  let fixture: ComponentFixture<NumberGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberGroupComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
