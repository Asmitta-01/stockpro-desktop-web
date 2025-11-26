import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../components/navbar/navbar';
import { SubpageHeader } from '../../components/subpage-header/subpage-header';

@Component({
    selector: 'app-help-center',
    imports: [CommonModule, FormsModule, Navbar, SubpageHeader],
    templateUrl: './help-center.html',
    styleUrl: './help-center.css'
})
export class HelpCenterPage {
    contact = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    faqs = [
        {
            q: "Comment installer StockPro Desktop ?",
            a: "Téléchargez l'installateur depuis la page de téléchargement, exécutez-le et suivez l'assistant d'installation."
        },
        {
            q: "Comment activer ma licence ?",
            a: "Allez dans Paramètres → A propos du logiciel → Activer la licence dans l'application, saisissez la clé fournie après le paiement et cliquez sur Activer."
        },
        {
            q: "J'ai perdu ma clé de licence, que faire ?",
            a: "Contactez-nous via le formulaire de contact ci-dessous ou envoyez un email à support@stockpro-desktop.fr avec vos informations d'achat."
        },
        {
            q: "Puis-je utiliser StockPro hors ligne ?",
            a: "Oui. StockPro fonctionne en local sans connexion internet. Certaines fonctionnalités (sauvegarde cloud, sync) nécessitent une connexion."
        }
    ];

    onSubmitContact(form: any) {
        if (!this.contact.name || !this.contact.email || !this.contact.message) {
            alert('Veuillez remplir au moins le nom, l\'email et le message.');
            return;
        }

        // In this project we don't send contact messages to a backend yet.
        // Log the submission and show a confirmation to the user.
        console.log('Contact submission', this.contact);
        alert('Merci — votre message a été envoyé. Nous vous répondrons bientôt.');
        this.contact = { name: '', email: '', subject: '', message: '' };
        if (form && form.reset) form.reset();
    }
}
