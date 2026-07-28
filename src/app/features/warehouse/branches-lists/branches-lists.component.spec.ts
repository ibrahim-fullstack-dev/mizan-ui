import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesListsComponent } from './branches-lists.component';

describe('BranchesListsComponent', () => {
  let component: BranchesListsComponent;
  let fixture: ComponentFixture<BranchesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchesListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchesListsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
