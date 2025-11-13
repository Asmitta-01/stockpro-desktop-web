import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency-service';
import { Plan } from '../models/plan.model';

@Component({
  selector: 'app-software-pricing',
  imports: [CurrencyPipe],
  templateUrl: './software-pricing.html',
  styleUrl: './software-pricing.css',
})
export class SoftwarePricing implements OnInit {
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.freePlanBenefits = [
      'Suivi de stock et ventes illimités',
      'Gestion de produits(max: 100) et catégories',
      'Création de factures',
      'Gestion des clients et fournisseurs',
      'Accès à tous les rapports essentiels',
      'Sauvegarde locale des données'
    ];

    let standardPlanBenefits = [
      'Suivi de stock et ventes illimités',
      'Gestion de produits et catégories illimités',
      'Alertes de stock bas',
      'Création de factures',
      'Gestion des clients et fournisseurs',
      'Rapports détaillés sur les ventes et marges',
      'Gestion multi-utilisateurs (jusqu’à 3)',
      'Exportation Excel / PDF',
      'Sauvegarde locale des données'
    ];
    let proPlanBenefits = [
      'Fonctionnalités du pack Standard',
      'Gestion de plusieurs points de vente',
      'Synchronisation entre ordinateurs',
      'Statistiques et rapports de performance',
      'Personnalisation des factures et reçus',
      'Importation massive de produits',
      'Gestion multi-utilisateurs (illimité)',
      'Sauvegarde cloud des données',
      'Assistance VIP et mises à jour anticipées',
    ];
    this.plans = [
      new Plan(1, 'Standard', 'Pour les commerces qui veulent aller plus loin dans la gestion et le suivi de leur activité.', 70000, standardPlanBenefits),
      new Plan(2, 'Professionnel', 'Pour les entreprises et dépôts qui veulent tout contrôler avec précision.', 120000, proPlanBenefits)
    ];

  }

  plans!: Plan[];
  freePlanBenefits!: string[];

  getCurrentCurrency(): string {
    return this.currencyService.getCurrency();
  }
}
