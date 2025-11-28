import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { PricingPlan } from '../../models/pricing-plan.model';
import { SinglePricingPlan } from "../single-pricing-plan/single-pricing-plan";

@Component({
  selector: 'app-software-download',
  imports: [SinglePricingPlan],
  templateUrl: './software-download.html',
  styleUrl: './software-download.css',
})
export class SoftwareDownload implements OnInit {
  downloadLink = 'https://github.com/Asmitta-01/stockpro-desktop/releases/download/1.6.2.11/StockPro-Setup.exe';
  uptodownLink = 'https://stockpro-desktop.fr.uptodown.com/windows';
  config = [
    ["OS", "Windows 7, 8, 10 & 11"],
    ["RAM", "1 GB minimum, 4 GB recommandé"],
    ["Stockage", "500 MB d'espace libre"],
    ["Réseau", "Aucune connexion internet requise"],
  ];

  plans!: PricingPlan[];

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.plans = this.planService.getPaidPlans();
  }
}
