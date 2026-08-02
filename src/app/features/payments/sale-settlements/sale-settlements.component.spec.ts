import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleSettlementsComponent } from './sale-settlements.component';

describe('SaleSettlementsComponent', () => {
  let component: SaleSettlementsComponent;
  let fixture: ComponentFixture<SaleSettlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleSettlementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleSettlementsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
