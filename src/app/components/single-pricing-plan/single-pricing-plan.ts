import { CurrencyPipe, LowerCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PricingPlan } from '../../models/pricing-plan.model';

@Component({
  selector: 'app-single-pricing-plan',
  imports: [CurrencyPipe, LowerCasePipe, RouterLink],
  templateUrl: './single-pricing-plan.html',
  styleUrl: './single-pricing-plan.css',
})
export class SinglePricingPlan {
  @Input() plan!: PricingPlan;

  getCurrentCurrency(): string {
    return 'XAF';
  }
}
