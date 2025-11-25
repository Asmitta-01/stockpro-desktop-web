import { CurrencyPipe, LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency-service';
import { PricingPlan } from '../../models/pricing-plan.model';
import { PlanService } from '../../services/plan.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-software-pricing',
  imports: [CurrencyPipe, LowerCasePipe, RouterLink],
  templateUrl: './software-pricing.html',
  styleUrl: './software-pricing.css',
})
export class SoftwarePricing implements OnInit {
  constructor(private currencyService: CurrencyService, private planService: PlanService) { }

  ngOnInit(): void {
    const freePlan = this.planService.getFreePlan();
    this.freePlanBenefits = freePlan ? freePlan.benefits : [];
    this.plans = this.planService.getPaidPlans();

  }

  plans!: PricingPlan[];
  freePlanBenefits!: string[];

  getCurrentCurrency(): string {
    return this.currencyService.getCurrency();
  }
}
