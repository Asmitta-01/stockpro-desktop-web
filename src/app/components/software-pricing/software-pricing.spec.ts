import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarePricing } from './software-pricing';

describe('SoftwarePricing', () => {
  let component: SoftwarePricing;
  let fixture: ComponentFixture<SoftwarePricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwarePricing]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoftwarePricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
