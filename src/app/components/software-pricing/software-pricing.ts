import { Component, OnInit, signal } from '@angular/core';
import { CurrencyService } from '../../services/currency-service';
import { PricingPlan } from '../../models/pricing-plan.model';
import { PlanService } from '../../services/plan.service';
import { SinglePricingPlan } from "../single-pricing-plan/single-pricing-plan";
import { SupabaseService } from '../../services/supabase-service';
import { Discount } from '../../models/discount.interface';

@Component({
  selector: 'app-software-pricing',
  imports: [SinglePricingPlan],
  templateUrl: './software-pricing.html',
  styleUrl: './software-pricing.css',
})
export class SoftwarePricing implements OnInit {
  constructor(private currencyService: CurrencyService, private planService: PlanService,
    private supabaseService: SupabaseService,) { }

  ngOnInit(): void {
    const freePlan = this.planService.getFreePlan();
    this.freePlanBenefits = freePlan ? freePlan.benefits : [];
    this.plans = this.planService.getPaidPlans();
    this.loadGlobalDiscount();
  }

  plans!: PricingPlan[];
  freePlanBenefits!: string[];
  globalDiscount = signal<Discount | undefined>(undefined);

  getCurrentCurrency(): string {
    return this.currencyService.getCurrency();
  }

  private async loadGlobalDiscount() {
    try {
      const discount = await this.supabaseService.getGlobalDiscount();
      if (discount !== null) { this.globalDiscount.set(discount); }
    } catch (error) {
      console.log('No global discount available');
    }
  }
}
