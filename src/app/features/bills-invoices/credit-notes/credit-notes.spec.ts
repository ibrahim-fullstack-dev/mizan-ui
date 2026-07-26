import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditNotesComponent } from './credit-notes.component';

describe('CreditNotes', () => {
  let component: CreditNotesComponent;
  let fixture: ComponentFixture<CreditNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditNotesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreditNotesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
