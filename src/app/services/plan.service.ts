import { Injectable } from '@angular/core';
import { PricingPlan } from '../models/pricing-plan.model';

@Injectable({ providedIn: 'root' })
export class PlanService {
    private plans: PricingPlan[] = [
        {
            id: 0,
            name: 'Free',
            description: 'Essayer StockPro gratuitement',
            price: 0,
            currency: 'XAF',
            type: 'free',
            benefits: [
                'Suivi de stock et ventes illimités',
                'Gestion de produits(max: 100) et catégories',
                'Création de factures',
                'Gestion des clients et fournisseurs',
                'Accès à tous les rapports essentiels',
                'Sauvegarde locale des données'
            ],
            isFree: true
        },
        {
            id: 1,
            name: 'Standard',
            description: 'Pour les commerces qui veulent aller plus loin dans la gestion et le suivi de leur activité.',
            price: 70000,
            currency: 'XAF',
            type: 'standard',
            benefits: [
                'Suivi de stock et ventes illimités',
                'Gestion de produits et catégories illimités',
                'Alertes de stock bas',
                'Création de factures',
                'Gestion des clients et fournisseurs',
                'Rapports détaillés sur les ventes et marges',
                'Gestion multi-utilisateurs (jusqu’à 3)',
                'Exportation Excel / PDF',
                'Sauvegarde locale des données'
            ]
        },
        {
            id: 2,
            name: 'Professionnel',
            description: 'Pour les entreprises et dépôts qui veulent tout contrôler avec précision.',
            price: 120000,
            currency: 'XAF',
            type: 'professional',
            benefits: [
                'Fonctionnalités du pack Standard',
                'Gestion de plusieurs points de vente',
                'Synchronisation entre ordinateurs',
                'Statistiques et rapports de performance',
                'Personnalisation des factures et reçus',
                'Importation massive de produits',
                'Gestion multi-utilisateurs (illimité)',
                'Sauvegarde cloud des données',
                'Assistance VIP et mises à jour anticipées'
            ]
        }
    ];

    getPlans(): PricingPlan[] {
        return this.plans.slice();
    }

    getPaidPlans(): PricingPlan[] {
        return this.plans.filter(p => !p.isFree);
    }

    getFreePlan(): PricingPlan | undefined {
        return this.plans.find(p => p.isFree);
    }

    getPlanById(id: number | string): PricingPlan | undefined {
        return this.plans.find(p => String(p.id) === String(id));
    }

    getPlanByName(name: string): PricingPlan | undefined {
        if (!name) return undefined;
        const normalized = name.trim().toLowerCase();
        return this.plans.find(p => p.name.trim().toLowerCase() === normalized);
    }
}
