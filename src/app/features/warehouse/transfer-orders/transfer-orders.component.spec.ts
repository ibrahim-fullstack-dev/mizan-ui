import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOrdersComponent } from './transfer-orders.component';

describe('TransferOrdersComponent', () => {
  let component: TransferOrdersComponent;
  let fixture: ComponentFixture<TransferOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransferOrdersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
