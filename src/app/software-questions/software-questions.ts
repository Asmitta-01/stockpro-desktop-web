import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-software-questions',
  imports: [],
  templateUrl: './software-questions.html',
  styleUrl: './software-questions.css',
})
export class SoftwareQuestions implements OnInit {
  data!: Question[];
  ngOnInit(): void {
    this.data = [
      new Question(1, "Quels types d'entreprises peuvent bénéficier de StockPro ?", "StockPro est conçu pour les entreprises de toutes tailles, y compris les détaillants, grossistes, quincailleries, pharmacies, et bien d'autres."),
      new Question(2, 'StockPro fonctionne-t-il sans connexion Internet ?', 'Oui, StockPro est une application 100% hors ligne, aucune connexion n’est requise pour son fonctionnement.'),
      new Question(3, 'Puis-je gérer plusieurs magasins dans StockPro ?', 'Oui, cette fonctionnalité est disponible en option payante et vous permet de créer et gérer plusieurs boutiques séparément.'),
      new Question(4, 'Puis-je imprimer des factures ou des reçus ?', 'Oui, vous pouvez générer une version imprimable de chaque opération avec les détails de la transaction.'),
      new Question(5, 'Puis-je personnaliser la devise utilisée ?', 'Oui, StockPro permet de choisir votre devise (XAF, EUR, USD, etc.) dans les paramètres.'),
      new Question(6, 'Le logiciel est-il sécurisé ?', 'Oui, les données sont stockées localement et protégées par mot de passe utilisateur.')
    ];
  }

}
