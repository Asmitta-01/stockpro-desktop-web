import { CurrencyPipe, LowerCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PricingPlan } from '../../models/pricing-plan.model';
import { Discount } from '../../models/discount.interface';

@Component({
  selector: 'app-single-pricing-plan',
  imports: [CurrencyPipe, LowerCasePipe, RouterLink],
  templateUrl: './single-pricing-plan.html',
  styleUrl: './single-pricing-plan.css',
})
export class SinglePricingPlan {
  @Input() plan!: PricingPlan;
  @Input() discount?: Discount;

  getCurrentCurrency(): string {
    return 'XAF';
  }

  get finalPrice(): number {
    if (!this.discount) return this.plan.price;

    if (this.discount.type === 'percentage') {
      return this.plan.price * (1 - this.discount.value / 100);
    }
    return Math.max(0, this.plan.price - this.discount.value);
  }
}
