import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatExpensesListComponent } from './repeat-expenses-list.component';

describe('RepeatExpensesListComponent', () => {
  let component: RepeatExpensesListComponent;
  let fixture: ComponentFixture<RepeatExpensesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatExpensesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepeatExpensesListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
