import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGroupComponent } from './client-group.component';

describe('ClientGroupComponent', () => {
  let component: ClientGroupComponent;
  let fixture: ComponentFixture<ClientGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientGroupComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
