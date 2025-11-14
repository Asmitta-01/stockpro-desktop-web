import { BusinessSector } from "./sector.interface";

export class SectorManager {
    private sectors: BusinessSector[] = [
        {
            id: "quincaillerie",
            icon: 'tools',
            label: "Quincailleries et magasins de matériaux",
            description: "Les quincailleries gèrent une grande variété de matériaux et d’outils. StockPro simplifie le suivi des entrées, sorties et niveaux critiques.",
            benefits: [
                "Suivi en temps réel du stock de matériaux, outils et accessoires",
                "Alerte automatique en cas de rupture ou stock critique",
                "Gestion des fournisseurs et des clients professionnels",
                "Historique complet des achats, ventes et mouvements internes",
                "Génération automatique de factures et reçus PDF"
            ],
            image: "images/target-tools.webp"
        },
        {
            id: "parfumerie",
            label: "Parfumeries et boutiques de beauté",
            description: "Les parfumeries manipulent de nombreuses références, gammes et teintes. StockPro offre une gestion rapide et ordonnée.",
            benefits: [
                "Suivi détaillé par catégorie, gamme ou type de produit",
                "Identification des meilleures ventes",
                "Gestion multi-utilisateur via réseau local",
                "Rapports de ventes journaliers et mensuels",
                "Notifications sur les produits bientôt en rupture"
            ],
            icon: "flower1",
            image: "images/target-perfumes.webp"
        },
        {
            id: "vêtements",
            label: "Boutiques de vêtements et accessoires",
            description: "Les boutiques de mode travaillent avec des produits à rotation rapide et plusieurs tailles. StockPro optimise leur organisation.",
            benefits: [
                "Organisation des stocks par catégorie, modèle et taille",
                "Graphiques des ventes par période",
                "Système multi-boutique (version Pro)",
                "Gestion simple des retours et échanges",
                "Analyse des articles les plus rentables"
            ],
            icon: "sunglasses",
            image: "images/target-clothes.webp"
        },
        {
            id: "supérette",
            label: "Supérettes et petits commerces",
            description: "Les supérettes manipulent beaucoup de produits à forte rotation. StockPro offre une visibilité claire sur leur activité.",
            benefits: [
                "Suivi en temps réel, même sans Internet",
                "Rapports automatiques des ventes et marges",
                "Alertes de stock faible pour éviter les ruptures",
                "Analyse des produits les plus vendus",
                "Gestion rapide des opérations quotidiennes"
            ],
            icon: "shop",
            image: "images/target-grocery.webp"
        },
        {
            id: "pharmacie",
            label: "Pharmacies et parapharmacies",
            description: "La précision et la traçabilité sont essentielles en pharmacie. StockPro sécurise la gestion des lots et des dates.",
            benefits: [
                "Gestion des lots et dates d’expiration",
                "Traçabilité complète des entrées et sorties",
                "Permissions avancées pour les utilisateurs",
                "Rapports d’inventaire et de conformité",
                "Réduction des erreurs grâce à une interface claire"
            ],
            icon: "hospital",
            image: "images/target-pharmacy.webp"
        },
        {
            id: "librairie",
            label: "Librairies et papeteries",
            description: "Les librairies doivent gérer livres, fournitures et saisonnalité. StockPro les aide à anticiper et organiser.",
            benefits: [
                "Classement par matière, éditeur ou catégorie",
                "Rapports de ventes pour anticiper la demande",
                "Gestion des clients institutionnels",
                "Exportation des historiques pour comptabilité",
                "Analyse des stocks pour préparer les périodes fortes"
            ],
            icon: "book",
            image: "images/target-library.webp"
        }
    ];

    /** Retourne la liste de tous les secteurs */
    public getAllSectors(): BusinessSector[] {
        return this.sectors;
    }
}
