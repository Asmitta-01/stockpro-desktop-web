import { Component, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { SubpageHeader } from "../../components/subpage-header/subpage-header";
import { FeatureDetails } from '../../models/feature-details.model';

@Component({
  selector: 'app-features-page',
  imports: [Navbar, SubpageHeader],
  templateUrl: './features-page.html',
  styleUrl: './features-page.css',
})
export class FeaturesPage implements OnInit {
  ngOnInit(): void {
    this.details = [
      new FeatureDetails('Une interface claire et intuitive', 'StockPro offre une expérience simple et rapide. Son interface conviviale permet à tout utilisateur, même débutant, de gérer efficacement son inventaire, ses partenaires et ses opérations quotidiennes sans formation complexe.'),
      new FeatureDetails('Suivi des stocks en temps réel', 'Gardez toujours une vision exacte de vos stocks grâce à la mise à jour automatique des quantités et aux alertes personnalisables lorsque certains produits atteignent un seuil critique.'),
      new FeatureDetails('Organisation et catégorisation des articles', 'Classez vos produits par catégorie, type ou fournisseur pour un accès rapide et une gestion fluide. L’inventaire est structuré pour s’adapter à vos méthodes de travail.'),
      new FeatureDetails('Contrôle d’inventaire complet', 'Comparez le stock théorique et le stock physique, détectez les écarts et ajustez facilement les quantités. StockPro aide à maintenir une cohérence parfaite entre la réalité et les données enregistrées.'),
      new FeatureDetails('Gestion des partenaires', 'Suivez les opérations de vos clients et fournisseurs depuis une seule interface. Chaque transaction est liée à un partenaire, avec historique complet des ventes et achats.'),
      new FeatureDetails('Multi-utilisateurs et permissions', 'Attribuez des rôles précis à chaque utilisateur (administrateur, vendeur, gestionnaire, etc.) et contrôlez les accès selon les responsabilités. Parfait pour les équipes qui partagent la gestion du stock.'),
      new FeatureDetails('Multi-devises', 'Configurez une devise principale pour toutes vos transactions, et gérez vos prix d’achat et de vente selon la monnaie utilisée dans votre région.'),
      new FeatureDetails('Documents professionnels', 'Générez automatiquement vos factures et reçus au format PDF avec vos informations commerciales et votre logo.'),
      new FeatureDetails('Multi-langues', 'Disponible en français et anglais, StockPro s’adapte à votre environnement professionnel et à vos préférences linguistiques.')
    ];
  }

  details!: FeatureDetails[];
}
