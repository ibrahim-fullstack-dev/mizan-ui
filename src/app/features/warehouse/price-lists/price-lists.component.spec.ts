import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListsComponent } from './price-lists.component';

describe('PriceListsComponent', () => {
  let component: PriceListsComponent;
  let fixture: ComponentFixture<PriceListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceListsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
