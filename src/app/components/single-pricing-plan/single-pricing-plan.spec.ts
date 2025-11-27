import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePricingPlan } from './single-pricing-plan';

describe('SinglePricingPlan', () => {
  let component: SinglePricingPlan;
  let fixture: ComponentFixture<SinglePricingPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePricingPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePricingPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
